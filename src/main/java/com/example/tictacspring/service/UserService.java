package com.example.tictacspring.service;

import com.example.tictacspring.dao.UserDao;
import com.example.tictacspring.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserDao {

    @Autowired
    private JdbcTemplate jtm;

    @Override
    public List<User> findAll() {

        String sql = "SELECT * FROM user ORDER BY score DESC";

        return jtm.query(sql, new BeanPropertyRowMapper<>(User.class));
    }
}