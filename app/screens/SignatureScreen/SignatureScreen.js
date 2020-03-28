import React, { 
	useEffect, 
  useState,
  useRef
} from 'react';
import { ScreenOrientation } from 'expo';
import { View } from 'react-native';

import styles from './SignatureScreenStyle';
import TinyText from 'signature-app-v2/app/components/TinyText';
import Signature from 'signature-app-v2/app/components/Signature';
import ButtonIcon from 'signature-app-v2/app/components/ButtonIcon';
import HeaderNavbar from 'signature-app-v2/app/components/HeaderNavbar';
import SubtitleText from 'signature-app-v2/app/components/SubtitleText';


export default function SignatureScreen(props) {
  let sign = useRef(null);
  
  let [signaturePath, setState] = useState(null);
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    if(props.navigation.state.params && props.navigation.state.params.signature != null){
			setState(props.navigation.state.params.signature);
		}
  }, [props]);
  
  useEffect(() =>{
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);
	
  function handleSignature(signature) {
    setState(signature);
  }
  function handleEmpty() {
    setState(null);
  }

  function handleSave() {
    props.navigation.navigate('HomeScreen', { path: signaturePath  })
  }

  return (
    <View style={styles.flex1}>
      <HeaderNavbar
        left={
          <ButtonIcon
            text='Cancelar'
            onPress={() => props.navigation.navigate('HomeScreen', {})}
          />
        }
        center={
          <SubtitleText
            text='Dibujar firma'
            color='white'
            weight='medium'
          />
        }
        right={
          <ButtonIcon
            disabled={signaturePath == null || signaturePath === ""}
            text='Guardar'
            iconName='check'
            onPress={() => handleSave()}
          />
        }
      />
      <Signature
        ref={sign}
        signature={signaturePath}
        onOK={handleSignature}
        onEmpty={handleEmpty}
      />
      <View style={styles.textContainer}>
          <TinyText
            color='darkest'
            wight='medium'
            text='Al tocar el botón aceptar confirmo que acepto la firma y las iniciales como representación electrónica de mi firma y mis iniciales para todos los efectos cuando yo (o mi agente) las utilice en documentos, incluidos contratos legalmente vinculantes, con la misma validéz que las iniciales o la firma en papel.'
          />
      </View>
    </View>
  )
};

SignatureScreen.navigationOptions = {
  header: null,
};