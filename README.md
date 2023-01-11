# interfacial-workout

The Graphic User Interface (GUI) is the designer's daily companion – friendly and convenient, it translates binary calculations into seemless and intuitive interactions. As skilled designers we embody our interfaces. While intuitively scrolling, clicking, dragging, dropping we provoke the computer to deploy, react, and return. In this intensive work-out session we will investigate the notion of embodiment in relation to designer-computer intra-action*.

Together we explored bodily ways to break with our own design habits by imagining what it could mean to physically engage with our design tools and a design process. Forget about your keyboards and trackpads. Together we will be designing bodily interfaces, that let us design a publication with gestures! 

Here's a short summary of the workshop flow: [https://chatty-pub.hackersanddesigners.nl/Scriptothek#ch-interfacialworkout](https://chatty-pub.hackersanddesigners.nl/Scriptothek#ch-interfacialworkout)

![Working the interface](images/interfacial_workingout.jpeg)

![The software showing a preview of the designed page](images/interface.png)


## Acknowledgements

This workshop is based on a project by Sarah Garcin called the PJ machine. After following a workshop with her in 2017, H&D got very inspired to many more things with this software. Sarah developed a new version of the software for Hackers & Designers, which we will be using in this workshop. You can find Sarah's original repository here: 

[https://github.com/sarahgarcin/pj-machine-workshop](https://github.com/sarahgarcin/pj-machine-workshop)

And here's and interview we did with her in 2022: 

[http://firstthenrepeat.hackersanddesigners.nl/#Interfacial-Workout](http://firstthenrepeat.hackersanddesigners.nl/#Interfacial-Workout)


## Installing the software 

Download the repository **interfacial-workout-23**

> [https://github.com/hackersanddesigners/interfacial-workout-23](https://github.com/hackersanddesigners/interfacial-workout-23)

### Dependencies

You need to install *Node* first, available here: [node.js](https://nodejs.org/)

You need to have Chrome browser installed: [https://chromeenterprise.google](https://chromeenterprise.google)

### Install process

Open a terminal window to execute commands and install the programm.

- macOS: go to Applications -> Utilities -> Terminal
- Linux: use a terminal app such as Terminal or Konsole
- Windows: open Cygwin

In your terminal, navigate to the pj-machine folder with your terminal using the `cd` command (cd stands for *change directory)*:

```
cd [path/to/your/folder]
```
If you don't know how to find the path to the folder you can also type **cd** and then drag and drop the "interfacial-workout-23" folder into the terminal window, then hit ENTER.

If you type a list command (ls) and then ENTER, you should see the same files listed that exist in the folder, (e.g. *bin, config.js, content, gulpfile.js* etcetera. 

```
ls
```

Now you need to install other things we need (dependencies) by typing the following command and hitting ENTER. This process may take up to 5 minutes:

```
npm install
```  
 
## Run PJ Machine

### Starting the server

Start the node server folder with the following command. In terminal, type: 


*If necessary* (if you closed the terminal window for example):

```
cd [path to folder]
```
Then start the server from there

```
node server.js
```

Now open a window in Chrome browser and go to [http://localhost:1337](http://localhost:1337)

### Stopping the server

To stop the server: type **ctrl + c** in terminal



## Remap Makey Makey to match PJ machine hotkeys

**Remapping using the Arduino environment**

To make full use of the functions available in the PJ machine, you need to remap the pins of the Makey Makey. In this repository you can find a folder called *makey-makey* that has an .ino file and an .h file inside. 

Follow this tutorial to reprogram the makey makey to use the right keys: 
[https://learn.sparkfun.com/tutorials/makey-makey-advanced-guide](https://learn.sparkfun.com/tutorials/makey-makey-advanced-guide)

*NOTE: Instead of using the code provided in the tutorial you have to use the .ino and related .h files provided in this repository.*


We will play with 9 design properties during this workshop: 

* group 1: move left & right | **a** and **q** | makey left and right arrow
* group 2: move up & down | **s** and **w** | makey up and down arrow
* group 3: zoom out & zoom in | **space** and **u** | makey space pin and pin D5
* group 4: select next block | **p** | makey pin D4
* group 5: select next font | **n** | makey pin D3
* group 6: rotate | **m** | makey pin D2
* group 7: decrease block width | **i** | makey pin D1
* group 8: increase block width | **e** | makey pin D0

**To generate a PDF of the page for print, press the letter T on your computer keyboard**

## Bonus: use an Arduino Leonardo as Makey Makey

[https://www.instructables.com/id/DIY-Makey-Makey-With-Arduino-Leonardo/](https://www.instructables.com/id/DIY-Makey-Makey-With-Arduino-Leonardo/)


## Trouble shooting

Having issues? Consult the tutorial here to trouble shoot: [https://github.com/sarahgarcin/pj-machine-workshop](https://github.com/sarahgarcin/pj-machine-workshop)

### Content not showing when I run the server

1. Check the terminal window: it gives you hints as to where things are going wrong. 
2. Make sure each block has a data.txt file containing the path and the content. Double check if the path is correct (mistakes in folder names are easy to make. Also check the file path of the image if using images. 
3. Check if the index number listed in the data.txt file is correct (if any). > Page 01 > Block 3 > should have index: 3
3. Sometimes the software adds big blocks of whitelines to the data.txt folders. This makes it seem as though there's nothing more, but actually there are parameters all the way down, like index numbers. This can wreak havoc and make you content disappear.  
4. Sometimes the opactiy of a block is set to 1, for 1% which makes it seem like it's not there. Check the data.txt file for that block and set opacity to 100 (might be allllll the way at the bottom of the file. 


### Parameters for text blocks


path: content/data/00/1

----

content: example text

----

index: 1

----

zoom: 1.5

----

xPos: 2.3999999999999986

----

yPos: 3.9999999999999996

----

wordSpace: 0

----

blockSize: 3.5

----

filesNb: 1

----

font: gulax

----

color: #F5351E

----

rotation: 15

----

strokeWidth: 0

----

opacity: 100

----