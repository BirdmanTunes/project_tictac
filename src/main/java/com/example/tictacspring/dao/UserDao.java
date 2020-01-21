package com.example.tictacspring.dao;

import com.example.tictacspring.model.User;

import java.util.List;

public interface UserDao {

    List<User> findAll();
}