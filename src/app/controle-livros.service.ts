import {Injectable} from '@angular/core';
import {Livro} from "./livro";

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  public livros: Array<Livro> = [
    (new Livro(1, 1, "senhos dos aneis", "Aventure em um mundo magico", ['andre', 'milena'])),
    (new Livro(2, 2, "Vida de pobre", "historia de uma vida de pobre", ['sivaldo', 'andre'])),
    (new Livro(3, 3, "Amumia", "Aventure é ação", ['Eunice', 'adriana']))
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
