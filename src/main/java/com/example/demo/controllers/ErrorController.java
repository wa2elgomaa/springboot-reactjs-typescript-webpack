package com.example.demo.controllers;

import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.NoHandlerFoundException;
import java.io.IOException;

@ControllerAdvice
public class ErrorController {

    private final Logger logger;
    public ErrorController( Logger logger){
        this.logger = logger;
    }
    @ExceptionHandler(NoHandlerFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handle(NoHandlerFoundException e){
        String url =e.getRequestURL();
        // The route is for a page
        if (!url.contains(".")){
            return "index";
        }
        // The route is for a file
        else{
            logger.error(e);
            return "notFound";
        }
    }

    @ExceptionHandler(value = IOException.class)
    protected @ResponseBody
    ResponseEntity<String> handleIoException(IOException ex) {
        logger.error(ex);
        return new ResponseEntity<>("Io exception", HttpStatus.BAD_REQUEST);
    }

}
