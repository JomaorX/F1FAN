import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormulaService } from '../../services/formula.service';
import Coment from '../../models/coment';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  comentForm: FormGroup;
  user: FormControl;
  comment: FormControl;
  fecha: FormControl;

  constructor(public formulaService: FormulaService){
    this.user = new FormControl('', Validators.required);
    this.comment = new FormControl('', Validators.required);
    this.fecha = new FormControl('', Validators.required);
  

    this.comentForm = new FormGroup({
      user: this.user,
      comment: this.comment,
      fecha: this.fecha
    })
  }

  handleSubmit(){
    const currentDate = new Date().toISOString();
      const isoDate = currentDate.substring(0, 10);
      const formattedDate = isoDate.split('-').reverse().join('/');
      
    const newComment: Coment = {
      user: this.comentForm.value.user,
      comment: this.comentForm.value.comment,
      fecha: formattedDate
    }
    console.log("Comentario enviado",newComment);
    
    this.formulaService.addComment(newComment);
  }
}
