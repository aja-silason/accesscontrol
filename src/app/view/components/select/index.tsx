import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TouchableOpacityProps } from 'react-native';
import { Loading } from '../loading';
import { Colors } from '../../styles/color';

// Define o tipo para as opções
interface Option {
  label: string;
  value: string;
}

// Define as props para o componente
interface SelectProps {
  options: Option[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ options, selectedValue, onSelect, placeholder = 'Selecione um item' }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsExpanded(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setIsExpanded(!isExpanded)}
        activeOpacity={0.7}
      >
        <Text style={styles.selectedText}>
          {selectedValue ? options.find(option => option.value === selectedValue)?.label : placeholder}
        </Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.optionsContainer}>
          
          {
            !options ? (
              <View style={{alignItems: 'center'}}>
                <Loading/>
              </View>
            ) : (
              <FlatList
                  showsVerticalScrollIndicator={false}
                    data={options}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.option}
                        onPress={() => handleSelect(item.value)}
                      >
                        <Text style={styles.optionText}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
            )
          }

        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  
  selectBox: {
    borderWidth: 1,
    borderColor: Colors.orange[100],
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
    zIndex: 0,
    width: "100%",
  },
  selectedText: {
    fontSize: 16,
  },
  optionsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 50, // Ajuste a posição conforme necessário
    left: 0,
    right: 0,
    maxHeight: 200, // Limita a altura máxima para a lista de opções
    zIndex: 1,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: "#000"
  },
});

export default Select;