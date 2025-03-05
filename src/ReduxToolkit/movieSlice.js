import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Movies: [
        { id: "1", name: "Jatt & Juliet", hero: "Diljit Dosanjh", writer: "Dheeraj Rattan", director: "Anurag Singh" },
        { id: "2", name: "Carry On Jatta", hero: "Gippy Grewal", writer: "Naresh Kathooria", director: "Smeep Kang" },
        { id: "3", name: "Chal Mera Putt", hero: "Amrinder Gill", writer: "Rakesh Dhawan", director: "Janjot Singh" },
        { id: "4", name: "Sardaar Ji", hero: "Diljit Dosanjh", writer: "Dheeraj Rattan", director: "Rohit Jugraj" },
        { id: "5", name: "Qismat", hero: "Ammy Virk", writer: "Jagdeep Sidhu", director: "Jagdeep Sidhu" },
        { id: "6", name: "Manje Bistre", hero: "Gippy Grewal", writer: "Gippy Grewal", director: "Baljit Singh Deo" },
        { id: "7", name: "Bhaji in Problem", hero: "Gippy Grewal", writer: "Naresh Kathooria", director: "Smeep Kang" },
        { id: "8", name: "Muklawa", hero: "Ammy Virk", writer: "Jagdeep Sidhu", director: "Simerjit Singh" },
        { id: "9", name: "Nikka Zaildar", hero: "Ammy Virk", writer: "Jagdeep Sidhu", director: "Simerjit Singh" },
        { id: "10", name: "Angrej", hero: "Amrinder Gill", writer: "Amberdeep Singh", director: "Simerjit Singh" },
        { id: "11", name: "Laung Laachi", hero: "Amberdeep Singh", writer: "Amberdeep Singh", director: "Amberdeep Singh" },
        { id: "12", name: "Ardaas", hero: "Gippy Grewal", writer: "Gippy Grewal", director: "Gippy Grewal" },
        { id: "13", name: "Super Singh", hero: "Diljit Dosanjh", writer: "Anurag Singh", director: "Anurag Singh" },
        { id: "14", name: "Rabb Da Radio", hero: "Tarsem Jassar", writer: "Jass Grewal", director: "Tarnvir Singh Jagpal" },
        { id: "15", name: "Kala Shah Kala", hero: "Binnu Dhillon", writer: "Amarjit Singh", director: "Amarjit Singh" },
        { id: "16", name: "Channo Kamli Yaar Di", hero: "Neeru Bajwa", writer: "Naresh Kathooria", director: "Pankaj Batra" },
        { id: "17", name: "Haani", hero: "Harbhajan Mann", writer: "Amberdeep Singh", director: "Amitoj Mann" },
        { id: "18", name: "Singh vs Kaur", hero: "Gippy Grewal", writer: "Dheeraj Rattan", director: "Navaniat Singh" },
        { id: "19", name: "Jihne Mera Dil Luteya", hero: "Diljit Dosanjh", writer: "Dheeraj Rattan", director: "Mandeep Kumar" },
        { id: "20", name: "Bambukat", hero: "Ammy Virk", writer: "Jass Grewal", director: "Pankaj Batra" },
        { id: "21", name: "Vadhayiyaan Ji Vadhayiyaan", hero: "Binnu Dhillon", writer: "Vaibhav Suman", director: "Smeep Kang" },
        { id: "22", name: "Mar Gaye Oye Loko", hero: "Gippy Grewal", writer: "Gippy Grewal", director: "Simerjit Singh" },
        { id: "23", name: "Chal Mera Putt 2", hero: "Amrinder Gill", writer: "Rakesh Dhawan", director: "Janjot Singh" },
        { id: "24", name: "Ardab Mutiyaran", hero: "Sonam Bajwa", writer: "Dheeraj Rattan", director: "Manav Shah" },
        { id: "25", name: "Sufna", hero: "Ammy Virk", writer: "Jagdeep Sidhu", director: "Jagdeep Sidhu" },
        { id: "26", name: "Lucky Di Unlucky Story", hero: "Gippy Grewal", writer: "Smeep Kang", director: "Smeep Kang" },
        { id: "27", name: "Fuffad Ji", hero: "Binnu Dhillon", writer: "Raju Verma", director: "Pankaj Batra" },
        { id: "28", name: "Zorawar", hero: "Yo Yo Honey Singh", writer: "Sagar Pandya", director: "Vinnil Markan" },
        { id: "29", name: "Jatt James Bond", hero: "Gippy Grewal", writer: "Anurag Singh", director: "Rohit Jugraj" },
        { id: "30", name: "Posti", hero: "Prince Kanwaljit Singh", writer: "Rana Ranbir", director: "Rana Ranbir" },
        { id: "31", name: "Ik Sandhu Hunda Si", hero: "Gippy Grewal", writer: "Jass Grewal", director: "Rakesh Mehta" },
        { id: "32", name: "Sikander", hero: "Kartar Cheema", writer: "Jass Grewal", director: "Jatinder Mauhar" },
        { id: "33", name: "Uda Aida", hero: "Tarsem Jassar", writer: "Naresh Kathooria", director: "Ksshitij Chaudhary" },
        { id: "34", name: "Tu Mera 22 Main Tera 22", hero: "Amrinder Gill", writer: "Dheeraj Rattan", director: "Amit Prasher" },
        { id: "35", name: "Saadi Love Story", hero: "Diljit Dosanjh", writer: "Dheeraj Rattan", director: "Dheeraj Rattan" },
        { id: "36", name: "Fer Mamla Gadbad Gadbad", hero: "Roshan Prince", writer: "Panki", director: "Rimpy Prince" },
        { id: "37", name: "Honsla Rakh", hero: "Diljit Dosanjh", writer: "Rakesh Dhawan", director: "Amarjit Singh" },
        { id: "38", name: "Baaz", hero: "Babbu Maan", writer: "Jass Grewal", director: "Simerjit Singh" },
        { id: "39", name: "Love Punjab", hero: "Amrinder Gill", writer: "Amberdeep Singh", director: "Rajiv Dhingra" },
        { id: "40", name: "Teri Meri Jodi", hero: "Sidhu Moose Wala", writer: "Aditya Sood", director: "Aditya Sood" },
        { id: "41", name: "Aate Di Chidi", hero: "Neeru Bajwa", writer: "Raju Verma", director: "Harry Bhatti" },
        { id: "42", name: "Mitran Nu Shaunk Hathyaran Da", hero: "Siddhi Ahuja", writer: "Jassi Maan", director: "Sagar S. Sharma" },
        { id: "43", name: "Shadaa", hero: "Diljit Dosanjh", writer: "Jagdeep Sidhu", director: "Jagdeep Sidhu" },
        { id: "44", name: "Qismat 2", hero: "Ammy Virk", writer: "Jagdeep Sidhu", director: "Jagdeep Sidhu" },
        { id: "44", name: "Qismat 2", hero: "Ammy Virk", writer: "Jagdeep Sidhu", director: "Jagdeep Sidhu" },

    ]

}
const MovieSlice = createSlice({
    name: 'Admovie',
    initialState,
    reducer: {
        Admovie: (state, action) => {
            const newMovie ={id:state.Movies[state.Movies.length-1]+1 , name:action.payload }
            state.movies.push(newMovie)
            state.movies.push(action.payload)
        },
        RemoveMovie: (state, action) => {

        }
    }
})
export const { Admovie, RemoveMovie } = MovieSlice.actions;
export default MovieSlice.reducer;