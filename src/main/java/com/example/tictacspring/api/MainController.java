package com.example.tictacspring.api;

import com.example.tictacspring.dao.UserRepository;
import com.example.tictacspring.dao.UserDao;
import com.example.tictacspring.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class MainController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserDao userService;

    @PostMapping(path="/add")
    public @ResponseBody String addNewUser (@RequestBody User user) {
        userRepository.save(user);
        return "Saved";
    }

    @GetMapping("/results")
    public ModelAndView showUsers() {

        List<User> scores = userService.findAll();

        Map<String, Object> params = new HashMap<>();
        params.put("users", scores);

        return new ModelAndView("results", params);
    }
}