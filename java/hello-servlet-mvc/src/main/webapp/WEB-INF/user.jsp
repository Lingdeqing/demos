<%@ page import="com.yaolin.www.bean.*" %>
<% User user=(User)request.getAttribute("user"); %>

<h1>
    hello, <%= user.getName() %>
</h1>