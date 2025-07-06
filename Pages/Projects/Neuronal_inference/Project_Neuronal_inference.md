## Neuronal inference project

### Introduction
The rhymogenesis mechanisms of the central pattern generator (CPG) for locomotion rely on interneurons endowed with the ability to generate bursts. This intrinsic bursting activity depends on several ionic currents, most notably the persistent sodium current, the M current, and more recently identified, the SK current. A central challenge is to identify which parameters, especially ionic channel conductances, govern the generation of bursts with specific features, such as spike count, inter-spike-intervals distributions, and the subthreshold envelope of the burst.

### Methods
Here, we propose an extended Hodgkin-Huxley neuron model capable of reproducing the diversity of firing patterns observed experimentally. To understand how different conductances shape neuronal spiking and bursting, we establish a suite of quantitative measures for characterizing the spike trains, allowing qualitative comparisons with experimental data. This allows the exploration of the spiking repertoire of our neuronal model when varying given parameters, in a univariate or multivariate manner. To further refine our understanding, we rely on model fitting procedure, namely simulation-based inference (SBI), to identify which conductances are modulated in a given experimental context.

### Results
We find that conductances exert complex and nonlinear influences on neuronal firing patterns, governing transitions between tonic spiking to bursting. Notably, increasing a given conductance can induce a switch from tonic to bursting, and then back to tonic spiking, highlighting the intricate dynamics at play between conductances. Moreover, our model can be robustly fitted to experimental data, capturing changes in bursting activity induced by pharmacological manipulation that shifts neurons from a spiking regime to a bursting regime. The estimated conductance parameters are determined with high precision. Trajectories inferred from empirical data map out how pharmacological interventions modulate conductances, providing insight into the underlying mechanisms driving changes in firing patterns.

### Discussion
We propose a computational method that combine neuronal modeling with Bayesian inference to reproduce and interpret firing transition from spiking to bursting. Our results demonstrate that this method can reliably track changes in conductance induced by pharmacological manipulation of the bursting activity of neurons. This approach opens the way to uncover neuronal mechanisms at work in populations of the spinal cord to produce activity patterns involved in locomotion.


## Model equations
**Model in a Nutshell** 


Membran potential equation:  $$C_m\frac{dV}{dt} = -\sum{I_m}$$


Current equations : $$ I_i = g_i.n_i.h_i.(V-E_i)$$


<!-- Adding some images -->
<!-- ![](/template/Image/Image_perso.jpeg) -->