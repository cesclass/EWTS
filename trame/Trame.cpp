/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * File:   Trame.cpp
 * Author: dylan
 * 
 * Created on 4 avril 2016, 12:04
 */

#include "Trame.h"

Trame::Trame() {
}

Trame::~Trame() {
}

void Trame::stockTrame(char trameBrute[256]) {
    for(int i=0; i<256; i++) {
        this->m_brute[i] = trameBrute[i];
    }
}
    
bool Trame::trier() {
    int position = 0;
    
    for(int i=0; i<6; i++) {
        this->m_id[i] = this->m_brute[i];
        position = i+1;
    }
    
    for(int i=0; i<2; i++) {
        this->m_version[i] = this->m_brute[position];
        position ++;
    }
    
    this->m_reserve[0] = this->m_brute[position];
    position ++;
    
    this->m_type[0] = this->m_brute[position];
    position ++;
    
    this->m_coup[0] = this->m_brute[position];
    position ++;
    
    this->m_etat[0] = this->m_brute[position];
    position ++;
    
    for(int i=0; i<2; i++) {
        this->m_u_pile[i] = this->m_brute[position];
        position ++;
    }   
    
    for(int i=0; i<2; i++) {
        this->m_u_capa[i] = this->m_brute[position];
        position ++;
    }
    
    for(int i=0; i<2; i++) {
        this->m_temperature[i] = this->m_brute[position];
        position ++;
    }
    
    for(int i=0; i<4; i++) {
        this->m_debit[i] = this->m_brute[position];
        position ++;
    }
    
    for(int i=0; i<4; i++) {
        this->m_c_inhibition[i] = this->m_brute[position];
        position ++;
    }
    
    for(int i=0; i<4; i++) {
        this->m_c_fuite[i] = this->m_brute[position];
        position ++;
    }
    
    for(int i=0; i<4; i++) {
        this->m_c_absence[i] = this->m_brute[position];
        position ++;
    }
    
    for(int i=0; i<6; i++) {
        this->m_conso[i] = this->m_brute[position];
        position ++;
    }
}
    
bool Trame::traduire() {
    
}
    
void Trame::sendTrame() {
    string envoi = "content-type : application/json \r\n\r\n";
    envoi += "[{ \r\n";
    
    envoi += "\"brute\":\"";
                        envoi += this->m_brute; 
                        envoi += "\", \r\n";
                        
    envoi += "\"id\":\"";
                        envoi += this->m_id; 
                        envoi += "\", \r\n";
                        
    envoi += "\"version\":\"";
                        envoi += this->m_version; 
                        envoi += "\", \r\n";
                        
    envoi += "\"reserve\":\"";
                        envoi += this->m_reserve; 
                        envoi += "\", \r\n";
                        
    envoi += "\"type\":\"";
                        envoi += this->m_type; 
                        envoi += "\", \r\n";
                        
    envoi += "\"coup\":\"";
                        envoi += this->m_coup; 
                        envoi += "\", \r\n";
                        
    envoi += "\"etat\":\"";
                        envoi += this->m_etat; 
                        envoi += "\", \r\n";
                        
    envoi += "\"U_pile\":\"";
                        envoi += this->m_u_pile; 
                        envoi += "\", \r\n";
                        
    envoi += "\"U_capa\":\"";
                        envoi += this->m_u_capa; 
                        envoi += "\", \r\n";
                        
    envoi += "\"temperature\":\"";
                        envoi += this->m_temperature; 
                        envoi += "\", \r\n";
                        
    envoi += "\"debit\":\"";
                        envoi += this->m_debit; 
                        envoi += "\", \r\n";
                        
    envoi += "\"C_inhibition\":\"";
                        envoi += this->m_c_inhibition; 
                        envoi += "\", \r\n";
                        
    envoi += "\"C_fuite\":\"";
                        envoi += this->m_c_fuite; 
                        envoi += "\", \r\n";
                        
    envoi += "\"C_absence\":\"";
                        envoi += this->m_c_absence; 
                        envoi += "\", \r\n";
                        
    envoi += "\"conso\":\"";
                        envoi += this->m_conso; 
                        envoi += "\" \r\n";
                        
    envoi += "}] \r\n";
                        
    cout << envoi;
}

