
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addEvents = createAsyncThunk('events/addEvents',async ({ urlApi, eventInfo}, { rejectWithValue }) => {
    try {
        const method = eventInfo ? 'POST' : 'GET' ;
        
        // if(method === 'POST'){
        //   await csrfCookie();
        // }
        const headers =eventInfo ? {
            "Accept": "application/json",
            ...(eventInfo && { "Content-Type": "application/json" }),
            // "X-XSRF-TOKEN": getCookie("XSRF-TOKEN")
            } : {};
        const res = await fetch(`http://localhost:8000/api/${urlApi}`, {
            method: method,
            credentials: "include",
            headers: headers,
            body: eventInfo ? JSON.stringify(eventInfo) : null
        });
        if (!res.ok) {
            const status = res.status;
            const error = await res.json();
            let errorMsg = "Une erreur est survenue lors de la gestion de l événements";

            if (status === 500 || status === 502 || status === 503) {

                errorMsg = "Erreur du serveur, impossible de gérer l'événement pour le moment. Veuillez réessayer plus tard.";
            } else if (status === 401 || status === 422) {
                
                errorMsg = "Echec de l'authentification. Vous devez etre connecte pour effectuer cette action";
                return rejectWithValue(error.message || errorMsg);
            } else if (status === 419) {
                errorMsg = "Session expirée. Veuillez vous reconnecter pour continuer.";
            } else {
                errorMsg = `une erreur inconnue s'est produite avec le statut ${status}.`;
            }
            return rejectWithValue(errorMsg);
        }
        
        const data = await res.json();
        console.log(data.events)
        return data.events;
    }
    catch (err) { 
        console.log(err)
        return rejectWithValue("Échec de l'authentification, veuillez réessayer."); 
    }
})

const EventsSlice = createSlice({
    name: "EventsData",
    initialState: {
        events: [], 
        success: false,
        error: null,
    },
    reducer:{
        AddNewevent : (state,action)=>{
            return [
                ...state,action.payload
            ]
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addEvents.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;

            })
            .addCase(addEvents.rejected, (state, action) => {
                state.loading = false;
                state.events = [];
                state.error = action.payload;
            })
    },
});
export default EventsSlice.reducer;
