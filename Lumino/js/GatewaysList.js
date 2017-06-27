import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';

/**
 * Mock of the gateways list
 * @param  {[string]} navigation [navigation props received from the Home component.
 */
const GatewayList = ({navigation}) => {
  const { navigate } = navigation;
  return (
    <ScrollView>
      <View>
        <Text>Gateway #1</Text>
        <Button
          onPress={() => navigate ('NewGatewayForm')}
          title="Configure"
        />
        <View>
          <View>
            <Text>Controller #1</Text>
            <Button
              onPress={() => navigate ('ControllerSettings')}
              title="Configure"
            />
          </View>
          <View>
            <Text>Controller #2</Text>
            <Button
              onPress={() => navigate ('ControllerSettings')}
              title="Configure"
            />
          </View>
        </View>
      </View>
      <View>
        <Text>Gateway #2</Text>
        <Button
          onPress={() => navigate ('NewGatewayForm')}
          title="Configure"
        />
        <View>
          <View>
            <Text>Controller #1</Text>
            <Button
              onPress={() => navigate ('ControllerSettings')}
              title="Configure"
            />
          </View>
        </View>
      </View>
      <View>
        <Text>Gateway #3</Text>
        <Button
          onPress={() => navigate ('NewGatewayForm')}
          title="Configure"
        />
        <View>
          <View>
            <Text>Controller #1</Text>
            <Button
              onPress={() => navigate ('ControllerSettings')}
              title="Configure"
            />
          </View>
          <View>
            <Text>Controller #2</Text>
            <Button
              onPress={() => navigate ('ControllerSettings')}
              title="Configure"
            />
          </View>
          <View>
            <Text>Controller #3</Text>
            <Button
              onPress={() => navigate ('ControllerSettings')}
              title="Configure"
            />
          </View>
        </View>
      </View>
      <Button
        onPress={() => navigate ('NewGatewayForm')}
        title="New Gateway"
      />
    </ScrollView>
  )
}

/**
 * StackNavigation options for GatewayList component
 */
GatewayList.navigationOptions = {
  title: 'Gateways',
}

export default GatewayList;
