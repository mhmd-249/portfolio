// Content block types for article rendering
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading2'; text: string }
  | { type: 'heading3'; text: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  content?: ContentBlock[];
}

// Helper to create inline formatting (used in paragraph text)
// Supported: **bold**, *italic*, `code`, [link text](url)

// Dummy blog posts with full content
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building production-ready agentic AI systems',
    excerpt: 'A deep dive into designing and deploying autonomous AI agents that can reliably operate in production environments.',
    date: '2025-01-15',
    slug: 'building-production-ready-agentic-ai-systems',
    content: [
      {
        type: 'paragraph',
        text: 'Agentic AI systems represent a fundamental shift in how we build AI applications. Unlike traditional request-response models, **agents operate autonomously**, making decisions, taking actions, and adapting to changing circumstances. This paradigm shift brings both incredible opportunities and significant engineering challenges.',
      },
      {
        type: 'paragraph',
        text: 'In this article, I\'ll share lessons learned from deploying agentic systems at scale, covering architecture patterns, reliability strategies, and the often-overlooked operational concerns that determine success in production.',
      },
      {
        type: 'heading2',
        text: 'Understanding Agent Architecture',
      },
      {
        type: 'paragraph',
        text: 'At its core, an agentic system consists of three fundamental components: a *reasoning engine* (typically an LLM), a *tool interface* for interacting with external systems, and a *memory system* for maintaining context across interactions. The interplay between these components determines the agent\'s capabilities and limitations.',
      },
      {
        type: 'paragraph',
        text: 'The most common architectural pattern is the **ReAct framework** (Reasoning + Acting), where the agent alternates between thinking about the problem and taking actions. Here\'s a simplified implementation:',
      },
      {
        type: 'code',
        language: 'python',
        code: `class Agent:
    def __init__(self, llm, tools, memory):
        self.llm = llm
        self.tools = tools
        self.memory = memory

    async def run(self, task: str) -> str:
        self.memory.add("user", task)

        while not self.is_complete():
            # Reasoning step
            thought = await self.llm.think(
                self.memory.get_context()
            )

            # Action step
            if thought.requires_action:
                result = await self.execute_tool(
                    thought.tool_name,
                    thought.tool_args
                )
                self.memory.add("tool", result)
            else:
                return thought.final_answer

        return self.memory.get_final_response()`,
      },
      {
        type: 'paragraph',
        text: 'This pattern works well for many use cases, but production systems often require more sophisticated orchestration. Consider using a *state machine* or *workflow engine* when you need deterministic behavior for certain paths.',
      },
      {
        type: 'heading2',
        text: 'Reliability in Production',
      },
      {
        type: 'paragraph',
        text: 'The biggest challenge with agentic systems isn\'t building them—it\'s making them reliable. LLMs are inherently stochastic, and agents amplify this uncertainty through iterative decision-making. A single poor decision can cascade into system failures.',
      },
      {
        type: 'heading3',
        text: 'Implementing Guardrails',
      },
      {
        type: 'paragraph',
        text: 'Guardrails are essential for production agents. They come in several forms:',
      },
      {
        type: 'list',
        items: [
          '**Input validation**: Sanitize and validate all inputs before they reach the agent',
          '**Output filtering**: Check agent outputs against safety policies and business rules',
          '**Action limits**: Restrict the scope and frequency of actions the agent can take',
          '**Cost controls**: Set budget limits for API calls and computational resources',
          '**Human-in-the-loop**: Require approval for high-stakes decisions',
        ],
      },
      {
        type: 'paragraph',
        text: 'I recommend implementing guardrails as middleware that wraps your agent\'s execution loop. This keeps the core logic clean while ensuring safety checks are always applied. Libraries like [Guardrails AI](https://guardrailsai.com) and [NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails) provide excellent starting points.',
      },
      {
        type: 'heading3',
        text: 'Handling Failures Gracefully',
      },
      {
        type: 'paragraph',
        text: 'Every production agent needs a robust failure handling strategy. The `retry with exponential backoff` pattern is table stakes, but you should also consider:',
      },
      {
        type: 'code',
        language: 'python',
        code: `from tenacity import retry, stop_after_attempt, wait_exponential

class ResilientAgent(Agent):
    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=4, max=60)
    )
    async def execute_with_retry(self, action):
        try:
            return await self.execute_tool(action)
        except ToolExecutionError as e:
            # Log the failure for observability
            logger.warning(f"Tool execution failed: {e}")

            # Try alternative approach if available
            if alternative := self.get_fallback(action):
                return await self.execute_tool(alternative)
            raise`,
      },
      {
        type: 'heading2',
        text: 'Observability and Debugging',
      },
      {
        type: 'paragraph',
        text: 'Debugging agentic systems is notoriously difficult. The non-deterministic nature of LLMs means you can\'t simply reproduce bugs by replaying inputs. You need comprehensive observability from day one.',
      },
      {
        type: 'paragraph',
        text: 'At minimum, log every LLM call with its full context, every tool invocation with inputs and outputs, and every state transition. Tools like [LangSmith](https://langsmith.com), *Weights & Biases*, and OpenTelemetry integrations are invaluable here.',
      },
      {
        type: 'paragraph',
        text: 'The key insight is to treat your agent\'s execution trace as a **first-class artifact**. Store traces in a queryable format, build dashboards for common failure modes, and create alerting for anomalous behavior patterns.',
      },
      {
        type: 'heading2',
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Building production-ready agentic AI systems requires thinking beyond the happy path. Focus on reliability, observability, and graceful degradation from the start. The field is evolving rapidly, but these foundational principles will serve you well regardless of which frameworks or models you choose.',
      },
      {
        type: 'paragraph',
        text: 'In future posts, I\'ll dive deeper into specific topics like *multi-agent orchestration*, *long-term memory systems*, and *evaluation strategies* for agentic AI. Stay tuned.',
      },
    ],
  },
  {
    id: '2',
    title: 'Fine-tuning LLMs for domain-specific tasks',
    excerpt: 'Practical strategies for adapting large language models to specialized domains while maintaining generalization.',
    date: '2024-12-20',
    slug: 'fine-tuning-llms-domain-specific-tasks',
    content: [
      {
        type: 'paragraph',
        text: 'Pre-trained language models are remarkably capable generalists, but they often fall short on specialized tasks. Whether you\'re building a **legal document analyzer**, a *medical coding assistant*, or a financial report generator, fine-tuning can dramatically improve performance on your specific use case.',
      },
      {
        type: 'paragraph',
        text: 'However, fine-tuning is not without risks. Done poorly, you can degrade the model\'s general capabilities, introduce biases, or waste significant compute resources. In this guide, I\'ll share practical strategies for effective domain adaptation.',
      },
      {
        type: 'heading2',
        text: 'When to Fine-tune (and When Not To)',
      },
      {
        type: 'paragraph',
        text: 'Fine-tuning isn\'t always the answer. Before investing in training, consider these alternatives:',
      },
      {
        type: 'list',
        items: [
          '**Prompt engineering**: Often, a well-crafted prompt with few-shot examples is sufficient',
          '**Retrieval-Augmented Generation (RAG)**: Inject domain knowledge at inference time',
          '**System prompts**: Define domain-specific behavior through careful instruction',
          '**API-based solutions**: Use specialized models like `gpt-4-turbo` with function calling',
        ],
      },
      {
        type: 'paragraph',
        text: 'Fine-tuning makes sense when you need consistent output formatting, domain-specific terminology, or when inference costs at scale justify the upfront training investment.',
      },
      {
        type: 'heading2',
        text: 'Preparing Your Training Data',
      },
      {
        type: 'paragraph',
        text: 'The quality of your training data is the single most important factor in fine-tuning success. A small, high-quality dataset will outperform a large, noisy one every time.',
      },
      {
        type: 'heading3',
        text: 'Data Collection Strategies',
      },
      {
        type: 'paragraph',
        text: 'For instruction fine-tuning, you need examples in a `prompt → completion` format. Here are effective ways to collect this data:',
      },
      {
        type: 'code',
        language: 'json',
        code: `{
  "messages": [
    {
      "role": "system",
      "content": "You are a medical coding assistant..."
    },
    {
      "role": "user",
      "content": "Code this diagnosis: Patient presents with acute bronchitis and mild fever."
    },
    {
      "role": "assistant",
      "content": "ICD-10 Codes:\\n- J20.9 (Acute bronchitis, unspecified)\\n- R50.9 (Fever, unspecified)"
    }
  ]
}`,
      },
      {
        type: 'paragraph',
        text: 'I recommend collecting at least **500-1000 high-quality examples** for meaningful improvement. Use domain experts to create or validate examples—this is not the place to cut corners.',
      },
      {
        type: 'heading3',
        text: 'Data Augmentation Techniques',
      },
      {
        type: 'paragraph',
        text: 'If you have limited data, augmentation can help. Consider these techniques:',
      },
      {
        type: 'list',
        items: [
          'Paraphrase inputs using a larger model while keeping outputs consistent',
          'Generate synthetic examples from templates with variable substitution',
          'Use *backtranslation* (translate to another language and back) for diversity',
          'Create negative examples to teach the model what NOT to do',
        ],
      },
      {
        type: 'heading2',
        text: 'Choosing a Fine-tuning Approach',
      },
      {
        type: 'paragraph',
        text: 'Modern fine-tuning offers several approaches, each with different trade-offs:',
      },
      {
        type: 'paragraph',
        text: '**Full fine-tuning** updates all model parameters. This offers maximum flexibility but requires significant compute and risks catastrophic forgetting. Use this only when you have abundant data and compute.',
      },
      {
        type: 'paragraph',
        text: '**LoRA (Low-Rank Adaptation)** trains small adapter layers while freezing the base model. This is my default recommendation—it\'s efficient, preserves general capabilities, and produces models that are easy to merge or swap.',
      },
      {
        type: 'code',
        language: 'python',
        code: `from peft import LoraConfig, get_peft_model

# Configure LoRA
lora_config = LoraConfig(
    r=16,                      # Rank of update matrices
    lora_alpha=32,             # Scaling factor
    target_modules=[           # Which layers to adapt
        "q_proj", "v_proj",
        "k_proj", "o_proj"
    ],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

# Apply to model
model = get_peft_model(base_model, lora_config)
print(f"Trainable params: {model.print_trainable_parameters()}")
# Output: trainable params: 4,194,304 || all params: 6,742,609,920 || trainable%: 0.062`,
      },
      {
        type: 'paragraph',
        text: '**QLoRA** combines LoRA with 4-bit quantization, enabling fine-tuning of large models on consumer GPUs. If you\'re working with limited hardware, this is a game-changer.',
      },
      {
        type: 'heading2',
        text: 'Training Best Practices',
      },
      {
        type: 'paragraph',
        text: 'Once your data and approach are ready, follow these guidelines for training:',
      },
      {
        type: 'list',
        items: [
          'Start with a **low learning rate** (1e-5 to 5e-5) to avoid catastrophic forgetting',
          'Use **gradient checkpointing** to reduce memory usage',
          'Train for **2-4 epochs** maximum—more often leads to overfitting',
          'Evaluate on a held-out set after each epoch and stop if performance degrades',
          'Save checkpoints frequently so you can roll back if needed',
        ],
      },
      {
        type: 'paragraph',
        text: 'Monitor your training curves closely. If training loss drops rapidly while validation loss plateaus or increases, you\'re overfitting. Reduce epochs or add regularization.',
      },
      {
        type: 'heading2',
        text: 'Evaluation and Iteration',
      },
      {
        type: 'paragraph',
        text: 'Evaluating fine-tuned models is tricky. Automated metrics like perplexity or BLEU scores rarely correlate with real-world usefulness. Instead, focus on task-specific evaluation:',
      },
      {
        type: 'paragraph',
        text: 'Create a **golden test set** of 50-100 examples that represent your actual use cases. Have domain experts score outputs on relevant criteria (accuracy, completeness, formatting, etc.). Track these scores across model iterations.',
      },
      {
        type: 'paragraph',
        text: 'Don\'t forget to test for *regressions* in general capabilities. Run your fine-tuned model through standard benchmarks like [MMLU](https://github.com/hendrycks/test) or HellaSwag to ensure you haven\'t sacrificed too much general knowledge.',
      },
      {
        type: 'heading2',
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Fine-tuning is a powerful tool for domain adaptation, but it\'s not magic. Success requires high-quality data, appropriate technique selection, and rigorous evaluation. Start small, iterate quickly, and always compare against simpler alternatives like prompting and RAG.',
      },
      {
        type: 'paragraph',
        text: 'The landscape is evolving rapidly—techniques like **RLHF**, *DPO*, and *constitutional AI* offer even more control over model behavior. But the fundamentals covered here will serve as a solid foundation for any fine-tuning project.',
      },
    ],
  },
  {
    id: '3',
    title: 'Vector databases: A comprehensive guide',
    excerpt: 'Understanding vector embeddings, similarity search, and how to choose the right vector database for your use case.',
    date: '2024-11-08',
    slug: 'vector-databases-comprehensive-guide',
  },
  {
    id: '4',
    title: 'Deployment strategies for ML models at scale',
    excerpt: 'From model serving to monitoring: best practices for deploying machine learning models in production.',
    date: '2024-10-05',
    slug: 'deployment-strategies-ml-models-scale',
  },
  {
    id: '5',
    title: 'Understanding transformer architectures',
    excerpt: 'Breaking down the attention mechanism and architectural innovations that power modern language models.',
    date: '2024-09-12',
    slug: 'understanding-transformer-architectures',
  },
];

// Helper function to get a blog post by slug
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Helper function to get all slugs for static generation
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
