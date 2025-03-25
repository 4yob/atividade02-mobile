import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function ProfileScreen({ route }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Alejandra Barros</Text>
            <Image source={require("../assets/img-profile.jpg")} style={styles.pic}/>
            <Text style={styles.descricao}>Bem vindo(a) ao meu perfil! Aqui eu organizo minhas qualidades como estudante de desenvolvimento de sistemas e personalizo minha jornada no mundo da tecnologia. Sou apaixonada por arte e paisagens. Me interesso por moda, dança e música e não vivo sem meus amigos.</Text>
            <View style={styles.block1}>
                <Image source={require("../assets/senai-logo.png")} style={styles.logotype} />
                <Text style={styles.texto1}>SERVIÇO EDUCACIONAL NACIONAL DE APRENDIZAGEM INDUSTRIAL - SENAI VALINHOS</Text>
                <Text style={styles.texto1}>Curso: Desenvolvimento de Sistemas</Text>
                <Text style={styles.texto1}>Turma: 2TDS1</Text>
                <Text style={styles.texto1}>E-mail: alejandra.barros@aluno.senai.br</Text>
            </View>
                <Text style={styles.descricao}>Linguagens e Tecnologias aplicadas:</Text>
            <View style={styles.block2}>
                <View style={styles.item}>
                    <Image source={require("../assets/reactjsx-icon.png")} style={styles.icon} />
                    <Text style={styles.texto2}>React</Text>
                </View>
                <View style={styles.item}>
                    <Image source={require("../assets/nextjs-icon.png")} style={styles.icon} />
                    <Text style={styles.texto2}>NextJS</Text>
                </View>
                <View style={styles.item}>
                    <Image source={require("../assets/css-icon.png")} style={styles.icon} />
                    <Text style={styles.texto2}>CSS</Text>
                </View>
                <View style={styles.item}>
                    <Image source={require("../assets/expogo-icon.png")} style={styles.icon} />
                    <Text style={styles.texto2}>Expo</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFEBCD",
        paddingHorizontal: 25,
        gap: 20,
        fontFamily: "Montserrat",
    },
    titulo: {
        fontSize: 28,
        textAlign: "center",
        color: "#D2691E",
        fontWeight: "800",
    },
    pic: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    descricao: {
        fontSize: 18,
        textAlign: "justify",
        paddingHorizontal: 20,
    },
    block1: {
        padding: 20,
        backgroundColor: "#F5DEB3",
        borderRadius: 10,
    },
    logotype: {
        width: 80,
        height: 20,
        marginBottom: 10,
    },
    texto1: {
        fontSize: 12,
        textAlign: "start",
    },
    block2: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        padding: 20,
        flexWrap: "wrap",
    },
    item: {
        padding: 5,
        backgroundColor: "#F5DEB3",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    icon: {
        width: 50,
        height: 50,
    },
    texto2: {
        fontSize: 15,
        fontWeight: "700",
    },
})