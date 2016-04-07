//  json.cpp (script_cgi.cgi)

#include <iostream>

using namespace std;

int main()
{
    cout << "Content-Type: application/json \n\r\n\r"; 
    cout << "[{" <<
            "\"brute\":\".\"," <<
            "\"id\":\".\"," <<
            "\"version\":\".\"," <<
            "\"reserve\":\".\"," <<
            "\"type\":\".\"," <<
            "\"coup\":\".\"," <<
            "\"etat\":\".\"," <<
            "\"U_pile\":\".\"," <<
            "\"U_capa\":\".\"," <<
            "\"temperature\":\".\"," <<
            "\"debit\":\".\"," <<
            "\"C_inhibition\":\".\"," <<
            "\"C_fuite\":\".\"," <<
            "\"C_absence\":\".\"," <<
            "\"conso\":\".\"" <<
            "}]";
    return 0;
}

