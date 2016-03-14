/* 
 * File:   main.cpp
 * Author: dylan
 *
 * Created on 10 février 2016, 10:30
 */

#include <cstdlib>
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
                cout << "content-type : text/html \r\n\r\n" << endl 
                     << maTrame.brute << endl
                     << maTrame.traduite << endl
                     << endl;
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




