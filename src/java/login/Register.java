/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package login;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import util.Util;

/**
 *
 * @author Saksham
 */
public class Register extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        System.out.print("RegisterAPI");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        Connection con = null;
        Statement st = null;
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String mobile = request.getParameter("mobile");
        String password = request.getParameter("password");

        String latitude = request.getParameter("latitude");
        String longitude = request.getParameter("longitude");

        PrintWriter out = response.getWriter();
        con = Util.getConnection();
        try {

            st = con.createStatement();

            String query = "insert into register(roll,status,username,password,mobile,email,name,longitude,latitude)values (3,'Verified', '" + email + "','" + password + "','" + mobile + "','" + email + "','" + name + "','" + longitude + "','" + latitude + "') ";
            System.out.print(query);
            int i = st.executeUpdate(query);
            if (i > 0) {
                String query2 = "insert into login_info(username,latitude,longitude)values('" + email + "','" + latitude + "','" + longitude + "')";
                System.out.print(query2);
                int i2 = st.executeUpdate(query2);
                if (i2 > 0) {
                    out.println("{\"Error\": \"False\" ,\"Message\": \"Registered Successfully\"}");
                } else {
                    out.println("{\"Error\": \"True\" ,\"Message\": \"Registration Failed\" }");
                }
            } else {
                out.println("{\"Error\": \"True\" ,\"Message\": \"Registration Failed\" }");
            }
        } catch (Exception e) {
            out.println("{\"Error\": \"True\" ,\"Message\": \"Error " + e.getMessage() + "\"  }");
            // out.println(e.getMessage());
        } finally {
            try {
                if (st != null) {
                    st.close();
                }
                if (con != null) {
                    con.close();
                }
            } catch (SQLException e) {
                out.println("{\"Error\": \"True\" ,\"Message\": \"Error " + e.getMessage() + "\"  }");
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(Register.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(Register.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
