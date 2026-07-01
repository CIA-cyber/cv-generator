import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { 
    padding: 40, 
    fontFamily: 'Helvetica', 
    backgroundColor: '#FFFFFF' 
  },
  header: { 
    marginBottom: 20, 
    borderBottomWidth: 2, 
    borderBottomColor: '#2C3E50', 
    borderBottomStyle: 'solid', 
    paddingBottom: 15 
  },
  nombre: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#2C3E50', 
    letterSpacing: 1 
  },
  titulo: { 
    fontSize: 13, 
    color: '#34495E', 
    marginTop: 4, 
    marginBottom: 10, 
    textTransform: 'uppercase' 
  },
  contactoContainer: { 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    marginTop: 5 
  },
  contacto: { 
    fontSize: 9, 
    color: '#7F8C8D', 
    marginRight: 15 
  },
  perfil: { 
    fontSize: 10, 
    lineHeight: 1.5, 
    color: '#444444', 
    marginBottom: 20, 
    textAlign: 'justify' 
  },
  section: { 
    marginBottom: 18 
  },
  subtitle: { 
    fontSize: 12, 
    fontWeight: 'bold', 
    color: '#2C3E50', 
    marginBottom: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#BDC3C7', 
    borderBottomStyle: 'solid', 
    paddingBottom: 4, 
    textTransform: 'uppercase' 
  },
  itemContainer: { 
    marginBottom: 12 
  },
  itemHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start',
    marginBottom: 2 
  },
  itemTitle: { 
    fontSize: 11, 
    fontWeight: 'bold', 
    color: '#333333' 
  },
  itemDate: { 
    fontSize: 9, 
    color: '#7F8C8D', 
    fontStyle: 'italic' 
  },
  itemSubtitle: { 
    fontSize: 10, 
    color: '#34495E', 
    marginBottom: 4,
    fontWeight: 'medium'
  },
  descripcion: { 
    fontSize: 10, 
    lineHeight: 1.4, 
    color: '#555555', 
    textAlign: 'justify' 
  },
  skillList: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginTop: 5 
  },
  skillItem: { 
    fontSize: 9, 
    backgroundColor: '#ECF0F1', 
    color: '#2C3E50', 
    paddingVertical: 4, 
    paddingHorizontal: 8, 
    marginRight: 6, 
    marginBottom: 6, 
    borderRadius: 3 
  }
});

const CVTemplate = ({ data }: { data: any }) => (
  <Document>
    <Page style={styles.page}>
      
      <View style={styles.header}>
        <Text style={styles.nombre}>{data.personalInfo.nombre}</Text>
        <Text style={styles.titulo}>{data.personalInfo.titulo}</Text>
        <View style={styles.contactoContainer}>
          <Text style={styles.contacto}>{data.personalInfo.contacto.email}</Text>
          <Text style={styles.contacto}>{data.personalInfo.contacto.linkedin}</Text>
          <Text style={styles.contacto}>{data.personalInfo.contacto.ubicacion}</Text>
        </View>
      </View>

      <Text style={styles.perfil}>{data.personalInfo.perfil}</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Experiencia Profesional</Text>
        {data.experiencia.map((exp: any, i: number) => (
          <View key={i} style={styles.itemContainer}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{exp.rol}</Text>
              <Text style={styles.itemDate}>{exp.fecha}</Text>
            </View>
            <Text style={styles.itemSubtitle}>{exp.empresa}</Text>
            <Text style={styles.descripcion}>{exp.descripcion}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Educación</Text>
        {data.educacion.map((edu: any, i: number) => (
          <View key={i} style={styles.itemContainer}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{edu.titulo}</Text>
              <Text style={styles.itemDate}>{edu.fecha}</Text>
            </View>
            <Text style={styles.itemSubtitle}>{edu.institucion}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Certificaciones</Text>
        {data.certificaciones.map((cert: any, i: number) => (
          <View key={i} style={styles.itemContainer}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{cert.nombre}</Text>
              <Text style={styles.itemDate}>{cert.fecha}</Text>
            </View>
            <Text style={styles.itemSubtitle}>{cert.emisor}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Habilidades e Idiomas</Text>
        <View style={styles.skillList}>
          {data.habilidades.map((skill: string, i: number) => (
            <Text key={`hab-${i}`} style={styles.skillItem}>{skill}</Text>
          ))}
          {data.idiomas.map((idioma: string, i: number) => (
            <Text key={`id-${i}`} style={styles.skillItem}>{idioma}</Text>
          ))}
        </View>
      </View>

    </Page>
  </Document>
);

export default CVTemplate;