import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// darrori f kol http request bach mukonch  7ta chiCross-Site Request 
export const csrfCookie = async () => {
    const response = await fetch("http://localhost:8000/sanctum/csrf-cookie", {
        credentials: "include",
    });
    if(!response.ok){
        throw new Error("Échec de l'authentification, veuillez réessayer.")
    }

};

export const loginUser = createAsyncThunk("authUser/loginUser", async ({ urlApi, userInfo}, { rejectWithValue }) => {
        try {
            await csrfCookie();
            const method = userInfo ? 'POST' : 'GET' ;

            const headers = {
                "Accept": "application/json",
                ...(userInfo && { "Content-Type": "application/json" }),
            };
            const res = await fetch(`http://localhost:8000/api/${urlApi}`, {
                method: method,
                credentials: "include",
                headers: headers,
                body: userInfo ? JSON.stringify(userInfo) : null
            });
            if (!res.ok) {
                const status = res.status;
                let errorMsg = "Échec de l'authentification, veuillez réessayer."
                if(status=== 500 || status === 502 || status === 503){
                    errorMsg="Erreur de connexion. Veuillez réessayer plus tard."
                } else if(status === 401){
                    const error = await res.json();   
                return rejectWithValue(error.message || "Échec de l'authentification, veuillez réessayer.");    
                }
                else if(status=== 419){
                    errorMsg = "Session expirée. Veuillez vous reconnecter."
                }
                return rejectWithValue(errorMsg);
            }
            
            const data = await res.json();
            console.table(data)
            return data.user;
        }
        catch (err) { 
            console.log(err)
            return rejectWithValue("Échec de l'authentification, veuillez réessayer."); 
        }
    }
);

const userAuthSlice = createSlice({
    name: "authUser",
    initialState: {
        user: null, 
        loading: false,
        error: null,
        role:null
    },
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.role=null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.role=action.payload.role;

            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload;
                state.role = null
            });
    },
});

export const { logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;