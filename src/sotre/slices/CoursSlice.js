export const fetchCourses = createAsyncThunk('courses/fetchCourses', async ({ urlApi, courseInfo, methodHTTP }, { rejectWithValue }) => {
    try {
      const method = methodHTTP;
      const headers = courseInfo ? {
        "Accept": "application/json",
        ...(method === 'POST' || method === 'PUT' ? { 'Authorization': `Bearer ${localStorage.getItem('auth_token')}` } : {})
      } : {};
  
      const res = await fetch(`http://localhost:8000/api/${urlApi}`, {
        method,
        headers,
        ...(method === 'POST' || method === 'PUT' ? { body: courseInfo } : {})
      });
  
      if (!res.ok) {
        const status = res.status;
        const error = await res.json();
        let errorMsg = "Une erreur est survenue lors de la gestion des cours.";
  
        if ([500, 502, 503].includes(status)) {
          errorMsg = "Erreur du serveur, veuillez réessayer plus tard.";
        } else if ([401, 422].includes(status)) {
          errorMsg = "Echec de l'authentification.";
        } else if (status === 419) {
          errorMsg = "Session expirée.";
        }
  
        return rejectWithValue(error.message || errorMsg);
      }
  
      const data = await res.json();
      return { data, method };
    } catch (err) {
      return rejectWithValue("Échec de l'authentification.");
    }
  });
  
  const CoursesSlice = createSlice({
    name: "CoursesData",
    initialState: {
      courses: [],
      error: null,
      loading: false,
    },
    reducers: {
      DeleteCourse: (state, action) => {
        const deletedId = action.payload.id;
        if (deletedId) {
          state.courses = state.courses.filter(c => c.id !== deletedId);
        }
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCourses.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCourses.fulfilled, (state, action) => {
          state.loading = false;
          const { method, data } = action.payload;
          if (method === 'POST' && data.course) {
            const exist = state.courses.some(c => c.id === data.course.id);
            if (!exist) {
              state.courses.push(data.course);
            }
          } else if (method === 'GET' || method === 'PUT') {
            state.courses = data.courses;
          }
        })
        .addCase(fetchCourses.rejected, (state, action) => {
          state.loading = false;
          state.courses = [];
          state.error = action.payload;
        });
    }
  });
  
  export const { DeleteCourse } = CoursesSlice.actions;
  export default CoursesSlice.reducer;
  