package bean;

public class PessoaBean {
	
	private String nome;
	private String email;

	//construtor completo
	public PessoaBean(String nome, String email) {
		super();
		this.nome=nome;
		this.email=email;
	}

//construtor padrao
	public PessoaBean() {
		
	}

	//Getters and Setters
	public String getNome() {
		return nome;
	}
     public void setNome(String nome) {
    	 this.nome = nome;
     }

     public String getEmail() {
    	 return email;
     }


}

