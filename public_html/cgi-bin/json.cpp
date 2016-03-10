//  trame.cpp (trame.cgi)

#include <iostream>

using namespace std;

int main()
{
    cout << "Content-Type: application/json \n\r\n\r"; 
    cout << "[{ \"id\":\"c5\", \"data\":\"294\", \"brut\":\"c500126\" }," <<
            "{ \"id\":\"d7\", \"data\":\"753\", \"brut\":\"d7002f1\" }," <<
            "{ \"id\":\"e9\", \"data\":\"618\", \"brut\":\"e90026a\" }]";
    return 0;
}
