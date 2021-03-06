package com.myfacebook.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.myfacebook.model.Post;

public class PostDAOImpl {

	private static SessionFactory sessionFactory;

	static {
		Configuration configuration = new Configuration();
		configuration.configure();
		sessionFactory = configuration.buildSessionFactory();
	}

	public void save(Post post) {
		Session session = sessionFactory.openSession();
		session.getTransaction().begin();
		session.save(post);
		session.getTransaction().commit();
		session.close();
	}

	public List<Post> findAll() {
		String hql = "from Post";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		List<Post> posts = query.list();
		session.close();
		return posts;
	}

}
