/* 
 * File:   main.cpp
 * Author: dylan
 *
 * Created on 8 mars 2016, 11:44
 */

#include <cstdlib>
#include "string.h"
#include "../sockets/SocketServeur.h"
#include "../recuperateur/Recuperateur.h"
#include "../trame/Trame.h"

using namespace std;

struct laTrame
{
    char brute[256] = {0};
    char traduite[256] = {0};
};

/*
 * Mes fonctions
 */
laTrame extraction(laTrame maTrame);

int main(int argc, char** argv) {
    /*
     * Création des sockets serveurs puis clients.
     */
    SocketServeur* sock = new SocketServeur('s');
    SocketServeur* sockC = new SocketServeur('c');
    
    /*
     * Création de la trame à envoyer.
     */
    
    laTrame maTrame;
    sprintf(maTrame.brute, "00161A56810224390B15E80000031D0000000590");
    maTrame = extraction(maTrame);
    
    if(sock->getSock() != INVALID_SOCKET) {
        cout << "La socket " << sock->getSock() << " est maintenant ouverte en mode TCP/IP"
                << endl;
        /*
         * Paramétrage de la socket serveur.
         */
        sock->parametrage();
        sock->bindSock();
        do {
            if(sock->getError() != SOCKET_ERROR) {
                sock->listenSock(10);
            
                if(sock->getSock() != SOCKET_ERROR) {
                    sock->acceptSock(sockC);
                    sock->sendDatas(sockC, &maTrame);
                    sock->shutdownSock(sockC);
                }
            }
            
        } while(true);
        sock->closeSock();
    }   
    return 0;
}

laTrame extraction(laTrame maTrame) {
    /*
     * Extraction des données de la trame et conversion des données 
     * hexadécimales dans la trame.
     * 
     * Author : caron
     */

    int position;

    for(int i=0; i<6; i++)
    {
        maTrame.traduite[i] = maTrame.brute[i];
        position = i;
    }
    position++;
    maTrame.traduite[position] = '|';

    
    for(int i=position; i<8; i++)
    {
        maTrame.traduite[i+1] = maTrame.brute[i];
        position = i;
    }
    position++;
    maTrame.traduite[position+1] = '|';
    /**********/
    
    maTrame.traduite[position+2] = maTrame.brute[position];
    position++;
    maTrame.traduite[position+2] = '|';

    maTrame.traduite[position+3] = maTrame.brute[position];
    position++;
    maTrame.traduite[position+3] = '|';
    /*********************/
    
    maTrame.traduite[position+4] = maTrame.brute[position];
    position++;
    maTrame.traduite[position+4] = '|';

    maTrame.traduite[position+5] = maTrame.brute[position];
    position++;
    maTrame.traduite[position+5] = '|';
    /*********************/

    for(int i=position; i<14; i++)
    {
        maTrame.traduite[i+6] = maTrame.brute[i];
        position = i;
    }
    position++;
    maTrame.traduite[position+6] = '|';

    for(int i=position; i<16; i++)
    {
        maTrame.traduite[i+7] = maTrame.brute[i];
        position = i;
    }
    position++;
    maTrame.traduite[position+7] = '|';

    for(int i=position; i<18; i++)
    {
        maTrame.traduite[i+8] = maTrame.brute[i];
        position = i;
    }
    position++;
    maTrame.traduite[position+8] = '|';

    for(int i=position; i<22; i++)
    {
        maTrame.traduite[i+9] = maTrame.brute[i];
        position = i;
    }
    position++;
    maTrame.traduite[position+9] = '|';

    for(int i=position; i<26; i++)
    {
        maTrame.traduite[i+10] = maTrame.brute[i];
        position = i;
    }
    position++;
    maTrame.traduite[position+10] = '|';

    for(int i=position; i<30; i++)
    {
        maTrame.traduite[i+11] = maTrame.brute[i];
        position = i;
    }
    position++;
    maTrame.traduite[position+11] = '|';

    for(int i=position; i<34; i++)
    {
        maTrame.traduite[i+12] = maTrame.brute[i];
        position = i;
    }
    position++;
    maTrame.traduite[position+12] = '|';

    for(int i=position; i<40; i++)
    {
        maTrame.traduite[i+13] = maTrame.brute[i];
        position = i;
    }
    position++;
    maTrame.traduite[position+13] = 0x00;

    return maTrame;
}