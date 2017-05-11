// Importar el núcleo de Angular
import  {Component} from 'angular2/core';
//Importar libreria estandar para enrutamiento
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component ({
	selector: 'restaurantes-list',
	templateUrl: 'app/view/restaurantes-list.html'
})


// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesList{
	private titulo:string = 'Listado de Restaurantes'; 

	public getTitulo():string{
		let titulo = this.titulo;
		return titulo;}

}