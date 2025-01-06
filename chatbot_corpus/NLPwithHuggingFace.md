<!-- metadata: {"type": "NLP_project", "model": "sentiment-analysis", "tools": ["Hugging Face", "PyTorch", "IMDb dataset"], "focus": "text-classification"} -->

# Sentiment Analysis with IMDb Dataset Using Hugging Face Ecosystem

## Purpose

The objective of this notebook is to enhance the existing sentiment analysis model for the IMDb dataset by leveraging the Hugging Face ecosystem. This ecosystem provides tools and utilities that work seamlessly with PyTorch, making it easier to implement and manage Natural Language Processing (NLP) tasks. The improvements include adopting Hugging Face's datasets, models, training framework, and evaluation tools to simplify the workflow and make the model more efficient.

### Key Changes:
1. **Model Adaptation**: Modify the model class for compatibility with the Hugging Face ecosystem.
2. **Streamlined Data Handling**: Use the Hugging Face Datasets library to load and preprocess the IMDb dataset.
3. **Eliminate Custom Training Loops**: Leverage Hugging Face's Trainer to handle the training process automatically.
4. **Efficient Model Management**: Simplify model saving and loading using Hugging Face's Trainer.
5. **Better Integration of Evaluation Metrics**: Use the `evaluate` library for seamless integration of metrics like accuracy and F1 score.
6. **Enhanced Experiment Tracking**: Incorporate Weights & Biases (WandB) for robust experiment tracking.

## Methods

### 1. Set Up Environment
The necessary libraries are loaded, and folders for saving datasets and models are specified.

### 2. Load Data
The IMDb movie review dataset is loaded from the provided files.

### 3. Create Hugging Face Dataset
Using Hugging Face's `datasets` library, the IMDb dataset is loaded and preprocessed.

### 4. Define Custom Model and Configuration
We define a custom model and configuration class for the neural network.

# Model Structure and Components for Sentiment Analysis

## Model Structure

The custom model for sentiment analysis is designed to align with the Hugging Face ecosystem by inheriting from `PreTrainedModel`. This ensures compatibility with Hugging Face's model management tools and training pipelines. The model's configuration class is set to `CustomConfig`, which connects the model to its configuration.

### Key Points:
- **Inherits from `PreTrainedModel`**: Ensures the model follows the Hugging Face architecture standards.
- **Config Class**: The `config_class` attribute is set to `CustomConfig`, linking the model to its configuration parameters, such as `vocab_size`, `embedding_dim`, and `num_labels`.

## Model Components

### 1. Embedding Layer
The model utilizes `nn.EmbeddingBag`, which is an efficient method for embedding the input text. This layer is initialized with `vocab_size` and `embedding_dim` from the model's configuration. It processes the input text into dense embeddings that will be passed through the network.

### 2. Sequential Layers
The core of the model consists of a series of linear layers combined with batch normalization, ReLU activation functions, and dropout layers. These layers are organized in a sequential manner for efficient forward pass processing:

- **Linear Layers**: These layers reduce the dimensionality of the input and are essential for processing the embeddings.
- **Batch Normalization**: This helps stabilize and speed up training by normalizing the output of the previous layers.
- **ReLU Activation**: Introduces non-linearity to the model, helping it learn complex patterns in the data.
- **Dropout Layers**: Regularization method used to prevent overfitting during training.

## Forward Pass

The forward pass of the model involves the following steps:

1. **Input**: The model takes `input_ids`, `offsets`, and an optional `labels` parameter.
2. **Embedding Computation**: The input text is passed through the `nn.EmbeddingBag` layer to obtain dense vector representations (embeddings).
3. **Sequential Layers**: The embeddings are then passed through the sequential layers, including the linear transformations, batch normalization, ReLU activations, and dropout layers.
4. **Logits**: The final output of the sequential layers is logits, which represent the model's raw predictions for sentiment classification.
5. **Loss Calculation**: If the `labels` parameter is provided (during training), the model computes the loss using `nn.CrossEntropyLoss`. This loss function compares the predicted logits to the true labels, which helps the model optimize its parameters.

## Output Format

The model outputs a `SequenceClassifierOutput`, which is a standard format used in Hugging Face models. This format includes:
- **Loss**: The loss computed during training, if labels are provided.
- **Logits**: The raw model predictions, which are passed to downstream tasks such as classification or further evaluation.

The `SequenceClassifierOutput` structure ensures compatibility with Hugging Face's utilities, such as the `Trainer` class, making it easier to manage training, evaluation, and prediction pipelines.

---

