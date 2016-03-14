/* 
 * File:   SocketServeur.cpp
 * Author: dylan
 * 
 * Created on 8 mars 2016, 11:44
 */


#include "SocketServeur.h"
#include <iostream>

using namespace std;

SocketServeur::SocketServeur(char type) {
    if(type == 's') {
        sock = socket(AF_INET, SOCK_STREAM, 0);
        recsize = sizeof(sin);
    }
}

SocketServeur::~SocketServeur(void) {
    
}

void SocketServeur::parametrage(void) {
    sin.sin_addr.s_addr = inet_addr("127.0.0.1");
    sin.sin_family = AF_INET;
    sin.sin_port = htons(PORT);
    
    int yes = 1;
    if(setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &yes, sizeof(int)) == -1) {
        pthread_exit(NULL);
    }
}

void SocketServeur::bindSock(void) {
    sock_err = bind(sock, (SOCKADDR*)&sin, recsize);
    if(sock_err == SOCKET_ERROR) {
        perror("bind");
    }
}

void SocketServeur::listenSock(int nbClient) {
    sock_err = listen(sock, nbClient);
    cout << "Listage du port " << PORT << "..." << endl;
    if(sock_err == SOCKET_ERROR) {
        perror("listen");
    }
}

void SocketServeur::acceptSock(SocketServeur* csock) {
    cout << "Patientez pendant que le client se connecte sur le port " << PORT << "..." << endl;
    SOCKADDR_IN csin = csock->getSin();
    socklen_t crecsize = csock->getRecsize();
    csock->sock = accept(sock, (SOCKADDR*)&csin, &crecsize);
    cout << "Un client se connecte avec la socket " << csock->getSock() << " de " << inet_ntoa(csock->getSin().sin_addr)
            << " : " << htons(csock->getSin().sin_port) << endl;
}

void SocketServeur::sendDatas(SocketServeur* csock, void* trame) {
    struct Trame
    {
        char brute[256];
        char traduite[256];
    };
    Trame maTrame = *(Trame*)trame;
    sock_err = send(csock->sock, &maTrame, sizeof(maTrame), 0);
    if(sock_err != SOCKET_ERROR) {
        cout << "trames envoyées" << endl;
    } else {
        perror("send");
    }
}

void SocketServeur::shutdownSock(SocketServeur* csock) {
    shutdown(csock->sock, 2);
}

void SocketServeur::closeSock(void) {
    cout << "Fermeture de la socket..." << endl;
    close(this->sock);
    cout << "Fermeture de la socket terminé.";
}

void SocketServeur::connectSock() {
    sock_err = connect(sock, (SOCKADDR*)&sin, recsize);
    if(sock_err == SOCKET_ERROR) {
        perror("connect");
    }
}

void SocketServeur::recvDatas(void* trame) {
    struct Trame
    {
        char brute[256];
        char traduite[256];
    };
    Trame* maTrame = (Trame*)trame;
    sock_err = recv(sock, maTrame, sizeof(*maTrame), 0);
    if(sock_err == SOCKET_ERROR) {
        perror("recv");
    }
}

