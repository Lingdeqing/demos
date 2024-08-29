package com.itranswarp.learnjava.framework;

import java.io.IOException;
import java.io.Writer;

import jakarta.servlet.ServletContext;

import com.mitchellbosecke.pebble.PebbleEngine;
import com.mitchellbosecke.pebble.loader.Servlet5Loader;
import com.mitchellbosecke.pebble.template.PebbleTemplate;

public class ViewEngine {

    private final PebbleEngine engine;

    public ViewEngine(ServletContext servletContext) {
        var loader = new Servlet5Loader(servletContext);
        loader.setCharset("UTF-8");
        loader.setPrefix("/WEB-INF/templates");
        loader.setSuffix("");
        this.engine = new PebbleEngine.Builder().autoEscaping(true).cacheActive(false) // no cache for dev
                .loader(loader).build();
    }

    public void render(ModelAndView mv, Writer writer) throws IOException {
        PebbleTemplate template = this.engine.getTemplate(mv.view);
        template.evaluate(writer, mv.model);
    }
}
