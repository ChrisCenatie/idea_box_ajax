class UpdateQuality
  attr_reader :id, :increment
  def initialize(id, increment)
    @id = id.to_i
    @increment = increment.to_i
  end

  def idea
    Idea.find(id)
  end

  def update
    quality = Idea.qualities[idea.quality] + increment
    if idea.update(quality: quality)
      200
    else
      405
    end
  end

end
