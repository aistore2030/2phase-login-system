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
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import util.Util;

/**
 *
 * @author Saksham
 */
public class logincheck extends HttpServlet {

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
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
        response.addHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
        response.addHeader("Access-Control-Max-Age", "1728000");
        Connection con = null;
        Statement st = null;
        Statement st1 = null;
        ResultSet rs;
        PrintWriter out = response.getWriter();
        try {
            con = Util.getConnection();
            st = con.createStatement();
            String email = request.getParameter("email");

            String longitude = request.getParameter("longitude");
            double long1 = Double.parseDouble(longitude);
            System.out.println("lat1" + long1);

            String latitude = request.getParameter("latitude");
            double lat1 = Double.parseDouble(latitude);
            System.out.println("lat1" + lat1);

            // String query = "select * from login_info where username='" + email + "' and longitude='"+longitude+"' and latitude='"+latitude+"'";
            String query = "select * from register where username='" + email + "'";
            rs = st.executeQuery(query);
            System.out.println("query" + query);
            if (rs.next()) {
                String latitude2 = rs.getString("latitude");
                double lat2 = Double.parseDouble(latitude2);
                System.out.println("lat2" + lat2);
                String longitude2 = rs.getString("longitude");
                double long2 = Double.parseDouble(longitude2);
                System.out.println("long2" + long2);
                double distance = distance(lat1, lat2, long1, long2);

                ////distance in kilometers
                double dist = (distance / 1000);
System.out.println(dist+"dist");
                if (dist < 20) {

                    out.println("{\"Error\": \"False\" ,\"Message\": \"Login Successfully!!\"}");

                }

            } else {
                out.println("{\"Error\": \"True\" ,\"Message\": \"Error occured\"}");

            }

        } catch (Exception e) {

            out.println("{\"Error\": \"True\" ,\"Message\": \"" + e.getMessage() + "}");

        }
    }

    public static double distance(double lat1, double lat2, double lon1,
            double lon2) {

        final int R = 6371; // Radius of the earth

        double latDistance = Math.toRadians(lat2 - lat1);

        double lonDistance = Math.toRadians(lon2 - lon1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000;

        double height = 0.0;

        distance = Math.pow(distance, 2) + Math.pow(height, 2);

        return Math.sqrt(distance);
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
        processRequest(request, response);
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
        processRequest(request, response);
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
