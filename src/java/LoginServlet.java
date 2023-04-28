import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

@WebServlet(urlPatterns = {"/LoginServlet"})
public class LoginServlet extends HttpServlet {
   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        
        try {
            Class.forName("org.mariadb.jdbc.Driver");
            Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost/swmb");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(String.format("SELECT COUNT(*) FROM users WHERE BINARY name=\"%s\"", username));
            rs.next();
            ResultSet rs1 = stmt.executeQuery(String.format("SELECT pass FROM users WHERE name=\"%s\"", username));
            rs1.next();
            
            if(rs.getString(1).equals("1")) {
                if(rs1.getString(1).equals(password)) {
                    response.getWriter().println("Login successful");
                    Cookie c = new Cookie("username", username);
                    response.addCookie(c);
                    response.sendRedirect("index.html");
                } else response.getWriter().println("Login failed");
            } else response.getWriter().println("Login failed");
            
            
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(LoginServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
}
