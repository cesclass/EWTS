/* 
 * File:   Recuperateur.cpp
 * Author: cornuau
 * 
 * Created on 4 avril 2016, 12:36
 */

#include "Recuperateur.h"

Recuperateur::Recuperateur(){                                //constructeur
    
}

void Recuperateur::ouvrirPort(){
    serial_port.Open("/dev/ttyUSB0");                 //ouverture du port série RS232
    if ( ! serial_port.good() ) 
    {
        std::cerr << "[" << __FILE__ << ":" << __LINE__ << "] "
                << "ERREUR! Impossible d'ouvrir le port série." << std::endl ;
        exit(1) ;
    }
    
}

void Recuperateur::configurerPort(string portName, int baudRate){
    serial_port.SetBaudRate(SerialStreamBuf::BAUD_19200);       //nombre de bauds
    
     if ( ! serial_port.good() )
     {
         std::cerr << "ERREUR ! Impossible de définir la vitesse de transmission. " <<  std::endl;
         exit(1) ;
     }
    
    serial_port.SetCharSize(SerialStreamBuf::CHAR_SIZE_8);            //taille
     if ( ! serial_port.good() )
     {
         std::cerr << "ERREUR ! Impossible de définir la talle des caractères. " <<  std::endl;
         exit(1) ;
     }

    serial_port.SetParity(SerialStreamBuf::PARITY_NONE);             //parité
     if ( ! serial_port.good() )
     {
         std::cerr << "ERREUR ! Impossible de désactiver la parité. " <<  std::endl ;
         exit(1) ;
     }
    
    serial_port.SetNumOfStopBits(1);                                 //bit de sto
    if ( ! serial_port.good() )
     {
         std::cerr << "ERREUR ! Impossible de définir le nombre de bits de stop. " << std::endl;
         exit(1) ;
     }
    
    serial_port.SetFlowControl(SerialStreamBuf::FLOW_CONTROL_NONE);  //contrôle d'échange
    if ( ! serial_port.good() )
    {
         std::cerr << "ERREUR ! Impossible d'utiliser le contrôle de flux matériel. " << std::endl;
         exit(1) ;
    }
}  

void Recuperateur::recupererTrame(Trame maTrame){
    
    
    const int BUFFER_SIZE = 256;
    char input_buffer[BUFFER_SIZE]; 
    
    if(serial_port.IsOpen()) {
        serial_port.read(m_StockageTrame, BUFFER_SIZE);
        cout << "Lecture sur le port série ! " << endl;
    }
    else {
        cout << "Erreur de lecture !" << endl;
    }
}

Recuperateur::~Recuperateur(){                      //destructeur
    
}