import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Task from './Task';

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    // Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask= (index) =>{
   let itemsCopy =[...taskItems];
   itemsCopy.splice(index,1);
   setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.taskwrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>

          <View style={styles.items}>
            {taskItems.map((item,index) =>{
            return(
              <TouchableOpacity key={index}  onPress={()=> completeTask(index)}>
                    <Task text={item} />
              </TouchableOpacity>
            )
            }
            )}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        // behavior={Platform.OS === "android" ? 'padding' : 'height'}
        style={styles.writeTask}>
        <TextInput
          style={styles.input}
          placeholder={'write a task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addwrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkwhite',
  },
  taskwrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTask: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    textAlign:"center",
    // backgroundColor: 'gray',
    borderRadius:100,
    borderWidth: 1,
  },
  addwrapper: {
    width: 60,
    height: 60,
    // backgroundColor: 'gray',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  addText: {},
});
