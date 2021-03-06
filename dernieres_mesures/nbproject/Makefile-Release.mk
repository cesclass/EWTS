#
# Generated Makefile - do not edit!
#
# Edit the Makefile in the project folder instead (../Makefile). Each target
# has a -pre and a -post target defined where you can add customized code.
#
# This makefile implements configuration specific macros and targets.


# Environment
MKDIR=mkdir
CP=cp
GREP=grep
NM=nm
CCADMIN=CCadmin
RANLIB=ranlib
CC=gcc
CCC=g++
CXX=g++
FC=gfortran
AS=as

# Macros
CND_PLATFORM=GNU-Linux
CND_DLIB_EXT=so
CND_CONF=Release
CND_DISTDIR=dist
CND_BUILDDIR=build

# Include project Makefile
include Makefile

# Object Directory
OBJECTDIR=${CND_BUILDDIR}/${CND_CONF}/${CND_PLATFORM}

# Object Files
OBJECTFILES= \
	${OBJECTDIR}/_ext/5c7ce86/Recuperateur.o \
	${OBJECTDIR}/_ext/22515211/SocketServeur.o \
	${OBJECTDIR}/_ext/82a06d6c/Trame.o \
	${OBJECTDIR}/dernieres_mesures.o


# C Compiler Flags
CFLAGS=

# CC Compiler Flags
CCFLAGS=
CXXFLAGS=

# Fortran Compiler Flags
FFLAGS=

# Assembler Flags
ASFLAGS=

# Link Libraries and Options
LDLIBSOPTIONS=

# Build Targets
.build-conf: ${BUILD_SUBPROJECTS}
	"${MAKE}"  -f nbproject/Makefile-${CND_CONF}.mk ${CND_DISTDIR}/${CND_CONF}/${CND_PLATFORM}/dernieres_mesures

${CND_DISTDIR}/${CND_CONF}/${CND_PLATFORM}/dernieres_mesures: ${OBJECTFILES}
	${MKDIR} -p ${CND_DISTDIR}/${CND_CONF}/${CND_PLATFORM}
	${LINK.cc} -o ${CND_DISTDIR}/${CND_CONF}/${CND_PLATFORM}/dernieres_mesures ${OBJECTFILES} ${LDLIBSOPTIONS}

${OBJECTDIR}/_ext/5c7ce86/Recuperateur.o: ../recuperateur/Recuperateur.cpp 
	${MKDIR} -p ${OBJECTDIR}/_ext/5c7ce86
	${RM} "$@.d"
	$(COMPILE.cc) -O2 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/_ext/5c7ce86/Recuperateur.o ../recuperateur/Recuperateur.cpp

${OBJECTDIR}/_ext/22515211/SocketServeur.o: ../sockets/SocketServeur.cpp 
	${MKDIR} -p ${OBJECTDIR}/_ext/22515211
	${RM} "$@.d"
	$(COMPILE.cc) -O2 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/_ext/22515211/SocketServeur.o ../sockets/SocketServeur.cpp

${OBJECTDIR}/_ext/82a06d6c/Trame.o: ../trame/Trame.cpp 
	${MKDIR} -p ${OBJECTDIR}/_ext/82a06d6c
	${RM} "$@.d"
	$(COMPILE.cc) -O2 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/_ext/82a06d6c/Trame.o ../trame/Trame.cpp

${OBJECTDIR}/dernieres_mesures.o: dernieres_mesures.cpp 
	${MKDIR} -p ${OBJECTDIR}
	${RM} "$@.d"
	$(COMPILE.cc) -O2 -MMD -MP -MF "$@.d" -o ${OBJECTDIR}/dernieres_mesures.o dernieres_mesures.cpp

# Subprojects
.build-subprojects:

# Clean Targets
.clean-conf: ${CLEAN_SUBPROJECTS}
	${RM} -r ${CND_BUILDDIR}/${CND_CONF}
	${RM} ${CND_DISTDIR}/${CND_CONF}/${CND_PLATFORM}/dernieres_mesures

# Subprojects
.clean-subprojects:

# Enable dependency checking
.dep.inc: .depcheck-impl

include .dep.inc
