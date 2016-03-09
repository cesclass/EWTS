//  trame.cpp (trame.cgi)

#include <iostream>

using namespace std;

int main()
{
    cout << "Content-Type: application/json \n\r\n\r"; 
    cout << "{\"Trames\"[" <<
            "{\"id\":\"01\", \"data\":\"294\"}" <<
            "{\"id\":\"02\", \"data\":\"753\"}" <<
            "{\"id\":\"03\", \"data\":\"618\"}" <<
            "]}";
    return 0;
}
