/* 
 * File:   SocketServeur.h
 * Author: dylan
 *
 * Created on 8 mars 2016, 11:44
 */


#ifndef SOCKETSERVEUR_H
#define SOCKETSERVEUR_H

#include <cstdlib>
#include <sys/types.h>
#include <sys/socket.h>
#include <iostream>
#include <string>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef int SOCKET;
typedef struct sockaddr_in SOCKADDR_IN;
typedef struct sockaddr SOCKADDR;

#define INVALID_SOCKET -1
#define SOCKET_ERROR -1
#define closesocket(param) close(param)
#define PORT 4200 

class SocketServeur {
public:
    /*
     * Constructeurs
     */
    SocketServeur(char type);
    
    /*
     * Destructeur
     */
    ~SocketServeur(void);
    
    /*
     * Accesseurs
     */
        //getters
        SOCKET getSock() {return this->sock;}
        SOCKADDR_IN getSin() {return this->sin;}
        int getRecsize() {return this->recsize;}
        int getError() {return this->sock_err;}
    
    /*
     * Méthodes publiques
     */
    void parametrage(void);
    void bindSock(void);
    void listenSock(int nbClient);
    void acceptSock(SocketServeur* csock);
    void sendDatas(SocketServeur* csock, void* trame);
    void shutdownSock(SocketServeur* csock);
    void closeSock(void);
    void connectSock(void);
    void recvDatas(void* trame);
    
private:
    /*
     * Attributs privés
     */
    SOCKET sock;
    SOCKADDR_IN sin;
    socklen_t recsize;
    int sock_err;
    
    /*
     * Méthode privées
     */
    
};

#endif /* SOCKETSERVEUR_H */

