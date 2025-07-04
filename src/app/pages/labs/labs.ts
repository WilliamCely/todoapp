import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [
    CommonModule
  ],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  Welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear sedrvicio',
  ]);
  name = signal('William');
  age = 24
  disabled = true;
  img = 'https://W3schools.com/howto/img_avatar.png';

  person = signal({
    name: 'William',
    age:24,
    avatar: 'https://W3schools.com/howto/img_avatar.png'
  });

  clickHandler(){
    alert('Hola')

  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);

  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);

  }

   changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue,10)
      }
    })

  }

}
