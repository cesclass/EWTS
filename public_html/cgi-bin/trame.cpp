//  trame.cpp (trame.cgi)
//  17.02 Fonctionnement [OK]

#include <iostream>

using namespace std;

int main()
{
    cout << "content-type : text/html \r\n\r\n "; 
    cout << "0x0A0B0C0D";
    return 0;
}
