package dao;

import java.util.ArrayList;
import java.util.List;

import bean.PessoaBean;
public class PessoaDAO {

	public static List<PessoaBean> lista = null;
	
	public PessoaDAO() {
		
		if(lista == null) {
			lista = new ArrayList<PessoaBean>();
			PessoaBean pessoaBean = new PessoaBean("Gustavo","gustavo@email.com");
			lista.add(pessoaBean);
		}
	}

	public boolean insert(PessoaBean pessoaBean) {
		
		return false;
	}

	
	
	
}
