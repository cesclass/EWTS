/* 
 * File:   Trame.h
 * Author: dylan
 *
 * Created on 4 avril 2016, 12:04
 */

#ifndef TRAME_H
#define TRAME_H

class Trame {
public:
    /*
     * Constructeur
     */
    Trame();
    
    /*
     * Destructeur
     */
    ~Trame();
    
    /*
     * Méthodes publiques
     */
    void stockTrame(char trameBrute[256]);
    bool trier();
    bool traduire();
    void sendTrame();
    
    
    
private:
    /*
     * Attributs privés
     */
    char m_brute[256];
    char m_id[16];
    char m_version[16];
    char m_reserve[16];
    char m_type[16];
    char m_coup[16];
    char m_etat[16];
    char m_u_pile[16];
    char m_u_capa[16];
    char m_temperature[16];
    char m_debit[16];
    char m_c_inhibition[16];
    char m_c_fuite[16];
    char m_c_absence[16];
    char m_conso[16];
        
};

#endif /* TRAME_H */

