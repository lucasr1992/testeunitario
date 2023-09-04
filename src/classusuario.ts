export interface UsuarioProps{
  nome: string;
  idade: number;
  cidade: string;
  sexo: string;
}

export class Usuario{
  private props: UsuarioProps;

  get nome(){
    return this.props.nome
  }

  get idade(){
    return this.props.idade
  }

  get cidade(){
    return this.props.cidade
  }

  get sexo(){
    return this.props.sexo
  }

  constructor(prop: UsuarioProps){
    this.props = prop
  }
}