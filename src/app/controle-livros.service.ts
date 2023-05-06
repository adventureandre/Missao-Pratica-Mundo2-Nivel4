import {Injectable} from '@angular/core';
import {Livro} from "./livro";

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  public livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: "Dom Casmurro",
      resumo: "Um clássico da literatura brasileira, este livro escrito por Machado de Assis narra a história de Bentinho e Capitu, explorando temas como amor, ciúme e traição.",
      autores: ["Machado de Assis"]
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: "Grande Sertão: Veredas",
      resumo: "Considerada uma das maiores obras da literatura brasileira, este livro escrito por Guimarães Rosa é uma narrativa complexa que se passa no sertão mineiro, abordando temas como identidade, amor e violência.",
      autores: ["João Guimarães Rosa"]
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: "O Alquimista",
      resumo: "Um dos livros mais conhecidos de Paulo Coelho, esta obra narra a jornada de Santiago, um jovem pastor, em busca de seu destino e dos segredos da vida.",
      autores: ["Paulo Coelho"]
    }
  ];

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
