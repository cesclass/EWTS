/* 
 * File:   Recuperateur.cpp
 * Author: cornuau
 * 
 * Created on 4 avril 2016, 12:36
 */

#include "Recuperateur.h"


char maTrame[256];
string portName();
SerialPort transTrame1("/dev/ttyUSB0");
    
Recuperateur::Recuperateur(){                                //constructeur
    
}

void Recuperateur::ouvrirPort(){
    
    transTrame1.Open();                 //ouverture du port série RS232                  
    
}

void Recuperateur::configurerPort(string portName, int baudRate){
    
    transTrame1.SetBaudRate(SerialPort::BAUD_19200);       //nombre de bauds
    transTrame1.SetCharSize(SerialPort::CHAR_SIZE_8);       //taille
    transTrame1.SetParity(SerialPort::PARITY_NONE);         //parité
    transTrame1.SetNumOfStopBits(SerialPort::STOP_BITS_1);  //bit de stop
    transTrame1.SetFlowControl(SerialPort::FLOW_CONTROL_NONE);  //contrôle d'échange
    
}  

void Recuperateur::recupererTrame(Trame maTrame){
    
    
    const int BUFFER_SIZE = 256;
    char output_buffer[BUFFER_SIZE];
    for (int i=0; i<BUFFER_SIZE; i++)
    {
        output_buffer[i] = i;
    }
    transTrame1.Write(output_buffer, BUFFER_SIZE);
            
    const int BUFFER_SIZE = 256;;
    char input_buffer[BUFFER_SIZE];
    transTrame1.Read(SerialPort, input_buffer, BUFFER_SIZE);
    
    
   // ifstream laTrame("maTrame.txt" ,ios::in);           //on ouvre le fichier en lecture
   // if(laTrame)                                //si l'ouverture à réussi
        //instructions à faire
        //m_StockageTrame = Trame.read(transTrame1);        //on lit la trame
   // else
  //  {
    //    cerr << "Impossible de stocker la trame ! " << endl;    //cerr qui correspond à la sortie 
                                                                //standard d'erreur non tamponné 
   // }
//}
}

void Recuperateur::inspectionRS232(){
    
}


Recuperateur::~Recuperateur(){                      //destructeur
    
}

