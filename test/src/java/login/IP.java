/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Saksham
 */
public class IP {
     public String ipAddress(HttpServletRequest request, HttpServletResponse response){
    
        String ip=null;
    try{
    if (request != null) {
       ip = request.getHeader("X-FORWARDED-FOR");
    if (ip == null || "".equals(ip)) {
         ip = request.getRemoteAddr();
       }
  }
    } 
    catch(Exception e){
    
    }
        
        return ip;
    }
}
