/* 
 * File:   Recuperateur.h
 * Author: cornuau
 *
 * Created on 4 avril 2016, 12:36
 */

#ifndef RECUPERATEUR_H
#define RECUPERATEUR_H
#include <stdio.h>
#include <termios.h>
#include <errno.h>
#include <fcntl.h>
#include <string.h>
#include <unistd.h>
#include <fstream>
#include <iostream>
#include "../trame/Trame.h"
#include "SerialPort.h"
#include <sstream>
#include <iomanip>
#include <SerialStream.h>
#include <cstdlib>

using namespace std;
using namespace LibSerial;

class Recuperateur {
public:
    Recuperateur();
    ~Recuperateur();
    void ouvrirPort();
    void configurerPort(string portName, int baudRate);
    void recupererTrame(Trame maTrame);
    void inspectionRS232();
private:
    int m_RecuperationTrame;
    char m_StockageTrame[256];
    int m_PortSerie;

};

#endif /* RECUPERATEUR_H */

