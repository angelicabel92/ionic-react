import React, { useRef, useState } from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonAlert } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import InputGroupComponent from './components/inputGroup.component';
import ResultCalculateComponent from './components/resultCalculate.component';
import InputControlsComponent from './components/inputControls.component';

const App: React.FC = () => {
  const [calculateBMI, setcalculateBMI] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'mkg' | 'ftlbs'>('mkg');
  const heightValueRef = useRef<HTMLIonInputElement>(null);
  const weightValueRef = useRef<HTMLIonInputElement>(null);

  const getCalculateBMI = () => {
    const enteredWeight = weightValueRef.current!.value;
    const enteredHeight = heightValueRef.current!.value;

    if (!enteredHeight || !enteredWeight || +enteredHeight <= 0 || +enteredWeight <= 0) {
      setError('Have to be a number');
      return;
    }

    const weightConversionFactor = calcUnits === 'ftlbs' ? 2.2 : 1;
    const heightConversionFactor = calcUnits === 'ftlbs' ? 3.28 : 1;

    const weight = +enteredWeight / weightConversionFactor;
    const height = +enteredHeight / heightConversionFactor;

    const bmi = +weight / (+height * +height);
    setcalculateBMI(bmi);
  };

  const resetInputs = () => {
    weightValueRef.current!.value = '';
    heightValueRef.current!.value = '';
  };

  const clearError = () => {
    setError('');
  }

  const selectCalcUnitHandler = (selectedValue: 'mkg' | 'ftlbs') => {
    setCalcUnits(selectedValue)
  }

  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        onDidDismiss={() => setError('')}
        message={error}
        buttons={[{ text:'OK', handler: clearError}]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="ion-text-center">Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <InputControlsComponent selectValue={calcUnits} onSelectValue={selectCalcUnitHandler} />
            <InputGroupComponent labelName={`Your Weight (${(calcUnits === 'mkg' ? 'meters' : 'feets')})`} useRefValue={heightValueRef}/>
            <InputGroupComponent labelName={`Your Weight (${(calcUnits === 'mkg' ? 'kg' : 'lbs')})`}  useRefValue={weightValueRef}/>
            <IonRow className="ion-padding-top">
                <IonCol size="6">
                  <IonButton color="secondary" expand="full" onClick={getCalculateBMI}>
                    <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                    Calculate
                  </IonButton>
                </IonCol>
                <IonCol size="6">
                  <IonButton color="primary" expand="full" onClick={resetInputs}>
                    <IonIcon slot="start" icon={refreshOutline}></IonIcon>
                    Reset
                  </IonButton>
                </IonCol>
            </IonRow>
            {calculateBMI && <ResultCalculateComponent resultImb={calculateBMI}/>}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  )};

export default App;
