/* 
 * File:   main.cpp
 * Author: dylan
 *
 * Created on 10 février 2016, 10:30
 */

#include <cstdlib>
#include "string.h"
#include "../sockets/SocketServeur.h"

using namespace std;



int main(int argc, char** argv) {
    
    
    /*
     * Création d'une socket (Client).
     */
    SocketServeur* sock = new SocketServeur('s');
    sock->parametrage();
    
    /*
     * Création du conteneur de la trame à recevoir.
     */
    struct Trame
    {
        char brute[256] = {0};
        char traduite[256] = {0};
    };
    Trame maTrame;
    
    
    if(sock->getSock() != INVALID_SOCKET) {
        sock->connectSock();
        if(sock->getError() != SOCKET_ERROR) {
            sock->recvDatas(&maTrame);
            if(sock->getError() != SOCKET_ERROR) {
                
                string traduite = maTrame.traduite;
                size_t debut = 0, fin;
                fin = traduite.find("|");
                
                string envoi = "content-type : text/html \r\n\r\n";
                envoi += "[{ \r\n";
                envoi += "\"brute\":\"";
                        envoi += maTrame.brute; 
                        envoi += "\", \r\n";
                        
                envoi += "\"id\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"version\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"reserve\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";debut = fin + 1;
                fin = traduite.find("|", debut);
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"type\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";debut = fin + 1;
                fin = traduite.find("|", debut);
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"coup\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";debut = fin + 1;
                fin = traduite.find("|", debut);
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"etat\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";debut = fin + 1;
                fin = traduite.find("|", debut);
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"U_pile\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";debut = fin + 1;
                fin = traduite.find("|", debut);
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"U_capa\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";debut = fin + 1;
                fin = traduite.find("|", debut);
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"temperature\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";debut = fin + 1;
                fin = traduite.find("|", debut);
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"debit\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";debut = fin + 1;
                fin = traduite.find("|", debut);
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"C_inhibition\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";debut = fin + 1;
                fin = traduite.find("|", debut);
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"C_fuite\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";debut = fin + 1;
                fin = traduite.find("|", debut);
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"C_absence\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\", \r\n";
                        
                debut = fin + 1;
                fin = traduite.find("|", debut);
                
                envoi += "\"conso\":\"";
                        envoi += traduite.substr(debut, fin-debut);
                        envoi += "\" \r\n";
                        
                envoi += "}] \r\n";
                        
                cout << envoi;
             
            } else {
                cout << "content-type : text/html \r\n\r\n" << endl
                     << "<p>Impossible de se connecter.<p>" << endl
                     << endl;
                
                sock->closeSock();
                return -1;
            }
        }
    }
    sock->closeSock();
    
    return 0;
}






