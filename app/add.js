import { db } from './firebase.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
  
  /**
   * Save a New Task in Firestore
   * @param {string} titulo 
   * @param {string} autor 
   * @param {string} editorial
   * @param {string} isbn
   * @param {Date} fecha
   */
  export const saveLibro = (titulo, autor, editorial, isbn, fecha) =>
    addDoc(collection(db, "libros"), { titulo, autor, editorial, isbn, fecha });
  
  const librosForm = document.getElementById("libros-form");
  
  librosForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const titulov     = librosForm['titulo']
    const autorv      = librosForm['autor']
    const editorialv  = librosForm['editorial']
    const isbnv       = librosForm['isbn']
    const fechav      = librosForm['fecha']

    saveLibro(titulov.value, autorv.value, editorialv.value, isbnv.value, fechav.value);
  })

