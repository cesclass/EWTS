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
                
                cout << "content-type : text/html \r\n\r\n"
                     << "[" << endl
                     << "{ \"id\":\"brute\",        \"data\":\"" << maTrame.brute << "\" }," << endl
                     << "{ \"id\":\"id\",           \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"version\",      \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"reserve\",      \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"type\",         \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"coup\",         \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"etat\",         \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"U_pile\",       \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"U_capa\",       \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"temperature\",  \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"debit\",        \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"C_inhibition\", \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                        
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"C_fuite\",      \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"C_absence\",    \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                debut = fin + 1;
                fin = traduite.find("|", debut);
                   
                cout << "{ \"id\":\"conso\",        \"data\":\""  << traduite.substr(debut, fin-debut) << "\" }," << endl;
                
                cout << "]" << endl;
                
                    //endl;
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






