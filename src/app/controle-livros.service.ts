import {Injectable} from '@angular/core';
import {Livro} from "./livro";

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  public livros: Array<Livro> = [
    {codigo:1,codEditora:1,titulo:"Livro 1",resumo:"resumo do livro1",autores:["andre","milena"]},
    {codigo:2,codEditora:3,titulo:"Livro 2",resumo:"resumo do livro2",autores:["Sivaldo","eunice"]},
    {codigo:3,codEditora:2,titulo:"Livro 3",resumo:"resumo do livro3",autores:["adriana","thiago"]}
  ]

  constructor() {
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro) {
    livro.codigo = this.livros.length > 0 ?
      Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    this.livros.push(livro)
  }

  excluir(codigo: number) {
    const livroIndex = this.livros.findIndex(livro => livro.codigo === codigo);
    if (livroIndex !== -1) {
      this.livros.splice(livroIndex, 1);
    }

  }
}
