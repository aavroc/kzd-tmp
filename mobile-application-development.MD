# Keuzedeel - Mobile Application Development (K0497)

# Planning

Nog 9 weken. Deze week gaan we een lokale development enviroment opzetten en een standaard app runnen in een android emulator.

## Een lokale development enviroment opzetten

### 1. Installeren Chocolatey

We beginnen met het installeren van een package-manager voor Windows genaamd Chocolatey.

https://chocolatey.org/install

Open een powershell terminal in VS code of windows en voer het commando uit dat je op bovenstaande pagina hebt gevonden.

### 2. Node.js en OpenJDK11

Als Chocolatey goed is geïnstalleerd dan gaan we node.js en openjdk11 installeren.

Open een administrator command prompt. (STARTMENU > "command prompt" > RECHTER MUIS KNOP op gevonden optie > Run as Administrator) Voer eventueel je administrator wachtwoord in en voer onderstaande command uit om Node.js en OpenJDK11 te installeren. 

```cmd
choco install -y nodejs-lts openjdk11
```
> * LTS staat voor Long Term Support, dit betekent dat deze versie langer worden ondersteund en je geen last hebt van veranderingen in de meest recente versie in ruil voor het ontbreken van de meest nieuwe features.
> * JDK staat voor Java Development Kit. Open JDK is een open-source versie van de Oracle JDK. Je hoeft hiervoor geen licentie kosten te betalen en kan dit ook voor commerciële doeleinden gebruiken.

### 3. Install Android Studio

Download Android Studio van onderstaande link

https://developer.android.com/studio/index.html

Kies tijdens de installatie telkens de recommended settings. Zorg dat onderstaande vinkjes in ieder geval aan staan:

![](img/screenshot.63.jpg)

Als Android Studio is geinstalleerd en je het welkom scherm ziet kies dan voor `More Actions` > `SDK Manager`

Op tabblad `SDK Platforms` (Zorg dat `Show Package Details` staan aangevinkt) zet een vinkje bij `Android 12.0 (S)`.

![](img/screenshot.SDK-2.jpg)

Op tabblad `SDK Tools` (Zorg dat `Show Package Details` staan aangevinkt) zet een vinkje bij `31.0.0`. 

![](img/screenshot.SDK-1.jpg)

### 4. Setting Enviroment Variables

Als laatste stap moeten we aangeven waar de Android SDK en Platform-tools te vinden zijn. Dit doen we door een enviroment variable aan te maken en de Platform-tools toe te voegen aan het systeem path.

#### Eerst de Android SDK toevoegen als ANDROID_HOME enviroment variable

`Windows toets` > `control panel` > `User Accounts` > `User Accounts` > `Change my enviroment variables` > `New`

Variable name:  | ANDROID_HOME
--- | ---  
Variable value: | path naar de android SDK

Ga naar `%LOCALAPPDATA%\Android\Sdk` in windows file explorer en copy/paste het path.   
Het zal iets zijn zoals: `C:\Users\<username>\AppData\Local\Android\Sdk` 

> * Of vind het path naar de android SDK door in Android Studio te kijken bij
File > Settings > Appearance & Behavior > System Settings > Android SDK

> * testen of het gelukt is? Voer `Get-ChildItem -Path Env:\` uit in een powershell terminal

#### Dan de platform-tools toevoegen aan het path

`%LOCALAPPDATA%\Android\Sdk\platform-tools` > copy/paste

`Windows toets` > `control panel` > `User Accounts` > `User Accounts` > `Change my enviroment variables` > Selecteer het `Path` variable > `Edit` > `New`

### 5. Een nieuw project initialiseren

Maak een map aan voor een eerste test project en open deze folder in VS Code.

Run onderstaand commando in een terminal:
```cmd
npx react-native init eersteProject
```

Klaar? Open deze map ook in Android Studio. Open daarna de android device manager via `View` > `Tools Windows` > `Device Manager`. Als het goed is staat er al een standaard virtuele device in. 

🚀OPDRACHT: Maak nieuwe device aan: een Pixel Pro API 31. Zet het interne geheugen op 2 GB. Start deze virtuele device.

Nu we een virtuele android telefoon hebben draaien gaan we nog twee commando's uitvoeren om je applicatie op de telefoon te installeren. Om te beginnen starten we een javascript packager genaamd Metro.

Open een nieuwe terminal in VS Code en voer onderstaand commando uit:
```cmd
npx react-native start
```
> * Je ziet dat Metro op de achtergrond blijft draaien, sluit deze terminal dus niet. 

Open weer een nieuwe terminal in VS Code en voer onderstaand commando uit om je app op de virtuele android telefoon te installeren:

```cmd
npx react-native run-android
```


## Resources
 
[Node.js](https://nodejs.org/en/)  
[React Native](https://reactnative.dev/docs/environment-setup)
